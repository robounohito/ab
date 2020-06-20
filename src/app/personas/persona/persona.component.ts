import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formPatchValue, FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Persona, Personas, PersonaSubsetPath } from '../personas.types';
import { slideInOut } from 'src/app/_core/animations/animations';
import { MatChipInputEvent } from '@angular/material/chips';
import { Condition, personaChange, removePersona } from '../personas.constants';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { path, compose, filter, append } from 'ramda';

interface PersonaForm {
  expanded: { [key: string]: boolean };
  nameEdit: boolean;
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

  condition = Condition;
  @Input() persona!: Persona;
  @Input() selectOptions!: Personas['selectOptions'];
  form!: FormGroupT<PersonaForm>;

  constructor(
    private fb: FormBuilder,
    private store: Store<App>,
  ) { }

  ngOnInit() {
    this.form = formCreate<PersonaForm>(
      this.fb, {
      expanded: [{ block: true }],
      nameEdit: [false],
      revenueMin: [this.persona.companyAttributes.revenue.min],
      revenueMax: [this.persona.companyAttributes.revenue.max],
    }, {
      validator: this.minMaxValidator('revenueMin', 'revenueMax')
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

  change(pathTo: PersonaSubsetPath, value: string | string[] | boolean) {
    this.store.dispatch(personaChange({
      personaId: this.persona.id,
      path: pathTo,
      value
    }));
  }

  changeRevenue(minValue: string, maxValue: string) {
    if (!minValue || !maxValue || parseInt(minValue, 10) > parseInt(maxValue, 10)) { return; }
    this.store.dispatch(personaChange({
      personaId: this.persona.id,
      path: ['companyAttributes', 'revenue'],
      value: {
        ...this.persona.companyAttributes.revenue,
        min: minValue,
        max: maxValue,
      }
    }));
  }

  tagRemove(pathTo: PersonaSubsetPath, item: string) {
    this.store.dispatch(personaChange({
      personaId: this.persona.id,
      path: pathTo,
      value: compose(
        filter(it => it !== item) as () => string[],
        path(pathTo)
      )(this.persona)
    }));
  }

  tagAdd(pathTo: PersonaSubsetPath, event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.store.dispatch(personaChange({
        personaId: this.persona.id,
        path: pathTo,
        value: compose(
          append(value.trim()) as () => string[],
          path(pathTo)
        )(this.persona)
      }));
    }
    if (input) {
      input.value = '';
    }
  }

  valueFromPath(pathTo: PersonaSubsetPath) {
    return path(pathTo, this.persona);
  }

  toggleNameEdit(nameEdit: boolean, nameEditEl: HTMLElement) {
    formPatchValue(this.form, { nameEdit: !nameEdit });
    if (!nameEdit) {
      setTimeout(() => nameEditEl.focus());
    }
  }

  nameEditBlur(
    pathTo: PersonaSubsetPath,
    nameEdit: boolean,
    nameEditEl: HTMLElement,
    event: InputEvent
  ) {
    if (!nameEdit) { return; }
    this.toggleNameEdit(nameEdit, nameEditEl);
    const value = (event.target as HTMLInputElement).value;
    if (!value || this.persona.name === value) { return; }
    this.store.dispatch(personaChange({
      personaId: this.persona.id,
      path: pathTo,
      value
    }));
  }

  removePersona(personaId: string) {
    this.store.dispatch(removePersona({ personaId }));
  }

  private minMaxValidator(revenueMin: string, revenueMax: string) {
    return (group: FormGroup) => {
      const min = group.controls[revenueMin];
      const max = group.controls[revenueMax];
      if (min.value > max.value) {
        min.setErrors({ minMaxMismatch: true });
        max.setErrors({ minMaxMismatch: true });
      } else {
        min.setErrors(null);
        max.setErrors(null);
      }
    };
  }

}
