import { createAction, props } from '@ngrx/store';
import { Persona, Contact, Personas, PersonaSubsetPath, ConditionalRevenue, ContactsPage } from './personas.types';

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
  props<{ personaId: string; contactsPage: ContactsPage; }>()
);

export const loadContactsSuccess = createAction(
  '[Personas] Load Contacts Success',
  props<{
    personaId: string;
    contacts: Contact[];
    contactsCount: number;
  }>()
);

export const searchContacts = createAction(
  '[Personas] Search Contacts',
  props<{ personaId: string; searchTerm: string; }>()
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

export const contactsTableColumns = {
  fullName: 'Full name',
  jobTitle: 'Job title',
  lastActivityDate: 'Last activity date',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  industry: 'Industry',
  companyLocation: 'Company location',
  technologies: 'Technologies',
  contactLocation: 'Contact location',
  fundingStage: 'Funding stage',
  numberOfEmployees: 'Number of employees',
};

export const pageSizes = [15, 30, 45] as const;
