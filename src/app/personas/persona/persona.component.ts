import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formPatchValue, FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Persona, Personas, PersonaSubsetPath } from '../personas.types';
import { slideInOut } from 'src/app/_core/animations/animations';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSelectChange } from '@angular/material/select';
import { Condition, personaSelectionChange } from '../personas.constants';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { path, compose, filter, append } from 'ramda';
import { MatRadioChange } from '@angular/material/radio';

interface PersonaForm {
  expanded: { [key: string]: boolean };
  active: boolean;
  revenueOption: Condition;
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
    this.form = formCreate<PersonaForm>(this.fb, {
      expanded: [{ block: true, /* location: true */ }],
      active: [true],
      revenueOption: [Condition.isAnyOf],
      revenueMin: [''],
      revenueMax: [''],
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

  selectChange(pathTo: PersonaSubsetPath, event: MatSelectChange | MatRadioChange) {
    this.store.dispatch(personaSelectionChange({
      personaId: this.persona.id,
      path: pathTo,
      value: event.value
    }));
  }

  inputBlur(pathTo: PersonaSubsetPath, event: InputEvent) {
    const value = (event.target as HTMLInputElement).value;
    if (value == null) { return; }
    this.store.dispatch(personaSelectionChange({
      personaId: this.persona.id,
      path: pathTo,
      value
    }));
  }

  tagRemove(pathTo: PersonaSubsetPath, item: string) {
    this.store.dispatch(personaSelectionChange({
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
      this.store.dispatch(personaSelectionChange({
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

}
