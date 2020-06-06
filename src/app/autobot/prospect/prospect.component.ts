import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { FormGroupT, formCreate, formPatchValue } from '../../_core/form/form';
import { FormBuilder } from '@angular/forms';
import { blankProfiilePic } from 'src/app/app.constants';
import { selectCurrentProspect } from '../autobot.model';
import { slideInOut } from 'src/app/_core/animations/animations';
import { faFileSignature, faSync, faTrashAlt, faRedo, faPencilAlt, faTimes, faReply, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, } from '@angular/material/dialog';
import { EditorComponent } from './editor/editor.component';

interface ProspectForm {
  expanded: { [key: string]: boolean };
  snippets: { [key: string]: string };
}

@Component({
  selector: 'autobound-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['../autobot.component.scss', './prospect.component.scss'],
  animations: [slideInOut],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProspectComponent implements OnInit {

  fa = { faFileSignature, faSync, faTrashAlt, faRedo, faPencilAlt, faTimes, faReply, faEnvelope };
  blankProfiilePic = blankProfiilePic;
  model$!: Observable<any>;
  form!: FormGroupT<ProspectForm>;

  constructor(
    private store: Store<App>,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectCurrentProspect);
    this.form = formCreate<ProspectForm>(this.fb, {
      expanded: [{ 1: true, 2: true, 3: true, 4: true }],
      snippets: [{
        1: '<h2>Autobot here</h2><h3>Subject: Monthly travel news and inspiration</h3>',
        2: '<h3>Destination of the Month</h3><h4>Valletta</h4><p>The capital city of <a href="https://en.wikipedia.org/wiki/Malta" target="_blank" rel="external"> Malta </a> is the top destination this summer. It’s home to a cutting-edge contemporary architecture, baroque masterpieces, delicious local cuisine and at least 8 months of sun.It’s also a top destination for filmmakers, so you can take a tour through locations familiar to you from Game of Thrones, Gladiator, Troy and many more.</p>',
        3: '<h3>The three greatest things you learn from traveling</h3><p><a href="#">Find out more</a></p>',
        4: '<h3>Walking the capitals of Europe: Warsaw</h3><p><a href="#">Find out more</a></p',
      }],
    });
  }

  changeData() {
    formPatchValue(this.form, {
      snippets: {
        ...this.form.controls.snippets.value,
        3: '<h2>Some additional text</h3>'
      }
    });
  }

  getData(value: ProspectForm) {
    alert(JSON.stringify(value));
  }

  toggleItem(id: string) {
    formPatchValue(this.form, {
      expanded: {
        ...this.form.controls.expanded.value,
        [id]: !this.form.controls.expanded.value[id]
      }
    });
  }

  edit() {
    this.dialog.open(EditorComponent, {
      width: '450px',
      data: {
        cb: (result: any) => {
          console.log('The dialog was closed with result', result);
        }
      }
    });
  }

}
