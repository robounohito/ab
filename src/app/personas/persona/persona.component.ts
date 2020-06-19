import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formPatchValue, FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Persona, Personas, PersonaSubsetPath } from '../personas.types';
import { slideInOut } from 'src/app/_core/animations/animations';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSelectChange } from '@angular/material/select';
import { Condition, personaChange, removePersona } from '../personas.constants';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { path, compose, filter, append } from 'ramda';
import { MatRadioChange } from '@angular/material/radio';

interface PersonaForm {
  expanded: { [key: string]: boolean };
  active: boolean;
  nameEdit: boolean;
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
      nameEdit: [false],
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

  selectRadioChange(pathTo: PersonaSubsetPath, event: MatSelectChange | MatRadioChange) {
    this.store.dispatch(personaChange({
      personaId: this.persona.id,
      path: pathTo,
      value: event.value
    }));
  }

  inputBlur(pathTo: PersonaSubsetPath, event: InputEvent) {
    const value = (event.target as HTMLInputElement).value;
    if (value == null) { return; }
    this.store.dispatch(personaChange({
      personaId: this.persona.id,
      path: pathTo,
      value
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
    console.log('nameEdit', nameEdit);
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

}
