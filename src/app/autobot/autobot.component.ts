import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroupT, formCreate, formPatchValue } from '../_core/form/form';
import { FormBuilder } from '@angular/forms';
import { Autobot } from './autobot.types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAutobot } from './autobot.model';
import { loadSuggestedActivities } from './autobot.constants';
import { slideInOut } from '../_core/animations/animations';

interface EditorForm {
  expanded: { [key: string]: boolean };
  snippets: { [key: string]: string };
}

@Component({
  selector: 'autobound-autobot',
  templateUrl: './autobot.component.html',
  styleUrls: ['./autobot.component.scss'],
  animations: [slideInOut],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutobotComponent implements OnInit {

  model$!: Observable<Autobot>;
  form!: FormGroupT<EditorForm>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectAutobot);
    this.store.dispatch(loadSuggestedActivities());
    this.form = formCreate<EditorForm>(this.fb, {
      expanded: [{}],
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

  getData(value: EditorForm) {
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

}
