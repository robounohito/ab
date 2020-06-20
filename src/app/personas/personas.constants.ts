
import { createAction, props } from '@ngrx/store';
import { Persona, Contact, Personas, PersonaSubsetPath, ConditionalRevenue } from './personas.types';

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

export const personaChange = createAction(
  '[Personas] Persona Change',
  props<{
    personaId: string;
    path: PersonaSubsetPath;
    value: string[] | string | boolean | ConditionalRevenue;
  }>()
);

export const personaCreate = createAction(
  '[Personas] Persona Create',
  props<{ order: number; }>()
);

export const personaCreateSuccess = createAction(
  '[Personas] Persona Create Success',
  props<{ persona: Persona; }>()
);

export const removePersona = createAction(
  '[Personas] Remove Persona',
  props<{ personaId: string; }>()
);

export enum Condition {
  isAnyOf = 'anyOf',
  isNoneOf = 'noneOf',
  isKnown = 'known',
  isUnknown = 'unKnown',
  isBetween = 'inBetween',
}
