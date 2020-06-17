import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formPatchValue, FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Persona, SelectOptions, Personas } from '../personas.types';
import { slideInOut } from 'src/app/_core/animations/animations';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSelectChange } from '@angular/material/select';
import { Condition } from '../personas.constants';

interface PersonaForm {
  expanded: { [key: string]: boolean };
  disabled: boolean;
  jobDepartment: string[];
  seniority: string[];
  jobTitleOption: Condition;
  jobTitles: string[];
  fundingStage: SelectOptions;
  numberOfEmployees: SelectOptions;
  revenueOption: Condition;
  revenueMin: string;
  revenueMax: string;
  industryOption: Condition;
  industries: string[];
  technologiesOption: Condition;
  technologies: string[];
}

@Component({
  selector: 'ab-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
  animations: [slideInOut],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaComponent implements OnInit {

  condition = Condition;
  @Input() persona!: Persona;
  @Input() selectOptions!: Personas['selectOptions'];
  form!: FormGroupT<PersonaForm>;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = formCreate<PersonaForm>(this.fb, {
      expanded: [{ block: true, /* location: true */ }],
      disabled: [true],
      jobDepartment: [[]],
      seniority: [[]],
      jobTitleOption: [Condition.contains],
      jobTitles: [[]],
      revenueOption: [Condition.contains],
      revenueMin: [''],
      revenueMax: [''],
      fundingStage: [[]],
      numberOfEmployees: [[]],
      industryOption: [Condition.contains],
      industries: [[]],
      technologiesOption: [Condition.contains],
      technologies: [[]],
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

  tagRemove(controlName: keyof PersonaForm, item: string) {
    formPatchValue(this.form, {
      [controlName]: (this.form.value[controlName] as string[])
        .filter(v => v !== item)
    });
  }

  tagAdd(controlName: keyof PersonaForm, event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      formPatchValue(this.form, {
        [controlName]: [
          ...this.form.value[controlName] as string[],
          value.trim()
        ]
      });
    }
    if (input) {
      input.value = '';
    }
  }

}
