import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formPatchValue, FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Persona, SelectOptions, Personas } from '../personas.types';
import { slideInOut } from 'src/app/_core/animations/animations';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSelectChange } from '@angular/material/select';

interface PersonaForm {
  expanded: { [key: string]: boolean };
  disabled: boolean;
  jobDepartment: string[];
  seniority: string[];
  jobTitleOption: '1' | '2' | '3' | '4';
  fundingStage: SelectOptions;
  numberOfEmployees: SelectOptions;
  revenueOption: '1' | '2' | '3' | '4';
  revenueMin: string;
  revenueMax: string;
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
  @Input() selectOptions!: Personas['selectOptions'];
  form!: FormGroupT<PersonaForm>;


  jobTitles: string[] = [];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = formCreate<PersonaForm>(this.fb, {
      expanded: [{ block: true, company: true }],
      disabled: [true],
      jobDepartment: [[]],
      seniority: [[]],
      jobTitleOption: ['1'],
      revenueOption: ['1'],
      revenueMin: [''],
      revenueMax: [''],
      fundingStage: [[]],
      numberOfEmployees: [[]],
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

  selectChange(event: MatSelectChange) {
    console.log(event);
  }





  onTagRemoved(job: string) {
    const jd = this.form.value.jobDepartment as string[];
    this.removeFirst(jd, job);
    formPatchValue(this.form, {
      jobDepartment: jd
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.jobTitles.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
