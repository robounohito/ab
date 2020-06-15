
import { createAction, props } from '@ngrx/store';
import { Prospect } from '../app.types';
import { Persona } from './personas.types';

export const loadPersonas = createAction(
  '[Personas] Load Personas',
);

export const loadPersonasSuccess = createAction(
  '[Personas] Load Personas Success',
  props<{ personas: Persona[]; }>()
);

export const reorderPersonas = createAction(
  '[Personas] Reorder Personas',
  props<{ original: Persona[]; moved: Persona[]; }>()
);

export const loadContacts = createAction(
  '[Personas] Load Contacts',
  props<{ personaId: string; page: number; }>()
);

export const loadContactsSuccess = createAction(
  '[Personas] Load Contacts Success',
  props<{ 
    personaId: string; 
    contacts: Prospect[]; 
    contactsCount: number;
  }>()
);

export enum Condition {
  contains,
  doesNotContain,
  isKnown,
  isUnknown,
}
