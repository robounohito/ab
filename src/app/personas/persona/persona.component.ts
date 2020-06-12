import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { formPatchValue, FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Persona } from '../personas.types';
import { slideInOut } from 'src/app/_core/animations/animations';

interface PersonaForm {
  expanded: { [key: string]: boolean };
  jobDepartment: string[];
}

@Component({
  selector: 'ab-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  animations: [slideInOut],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaComponent implements OnInit {

  @Input() persona!: Persona;
  form!: FormGroupT<PersonaForm>;




  jobDepartments: string[] = ['Job 1', 'Another one', 'Department', 'Something else', 'Whatever'];


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = formCreate<PersonaForm>(this.fb, {
      expanded: [{ block: true, contacts: true, company: true }],
      jobDepartment: [[]],
    });
  }

  toggleItem(id: string) {
    formPatchValue(this.form, {
      expanded: {
        ...this.form.controls.expanded.value,
        [id]: !this.form.controls.expanded.value[id]
      }
    });
  }





  onTagRemoved(job: string) {
    const jd = this.form.value.jobDepartment as string[];
    this.removeFirst(jd, job);
    formPatchValue(this.form, {
      jobDepartment: jd
    });
  }

 /*  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.toppingList.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  } */

  truncate(arr: string[]) {
    return [...arr, 'whatever'];
  }

  drop() { }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
