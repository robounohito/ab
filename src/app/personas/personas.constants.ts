
import { createAction, props } from '@ngrx/store';
import { Persona, Contact, Personas, PersonaSubsetPath } from './personas.types';

export const loadPersonas = createAction(
  '[Personas] Load Personas',
);

export const loadPersonasSuccess = createAction(
  '[Personas] Load Personas Success',
  props<{
    personas: Persona[];
    dataSets: Personas['selectOptions'];
  }>()
);

export const reorderPersonas = createAction(
  '[Personas] Reorder Personas',
  props<{ original: Persona[]; moved: Persona[]; }>()
);

export const loadContacts = createAction(
  '[Personas] Load Contacts',
  props<{ personaId: string; offset: number; limit: number; }>()
);

export const loadContactsSuccess = createAction(
  '[Personas] Load Contacts Success',
  props<{
    personaId: string;
    contacts: Contact[];
    contactsCount: number;
  }>()
);

export const personaSelectionChange = createAction(
  '[Personas] Persona Selection Change',
  props<{
    personaId: string;
    path: PersonaSubsetPath;
    value: string[] | string;
  }>()
);

export enum Condition {
  isAnyOf,
  isNoneOf,
  isKnown,
  isUnknown,
}
