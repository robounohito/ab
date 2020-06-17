
import { createAction, props } from '@ngrx/store';
import { Persona, Contact, Personas } from './personas.types';

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

export enum Condition {
  contains,
  doesNotContain,
  isKnown,
  isUnknown,
}

export enum JobDepartment {
  sales = 'Sales',
  marketing = 'Marketing',
  product = 'Product',
  informationTechnology = 'Information Technology',
  engineering = 'Engineering',
  legal = 'Legal',
  administration = 'Administration',
  researchAndDevelopment = 'Research and Development',
  humanResources = 'Human Resources',
  finance = 'Finance',
  customerSuccess = 'Customer Success',
  operations = 'Operations',
  publicRelations = 'Public Relations',
  investor = 'Investor',
  compliance = 'Compliance',
}

export enum Seniority {
  owner = 'Owner',
  founder = 'Founder',
  cSuite = 'C-Suite',
  partner = 'Partner',
  president = 'President',
  head = 'Head',
  vp = 'VP',
  director = 'Director',
  manager = 'Manager',
  senior = 'Senior',
  entry = 'Entry',
  intern = 'Intern',
  other = 'Other (search)',
}
