
import { on, createReducer, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { Personas, Persona, Contact, ContactDto } from './personas.types';
import { loadContactsSuccess, loadPersonasSuccess, reorderPersonas } from './personas.constants';
import { sortWith, ascend, prop, assoc, find, whereEq, evolve, always, lensIndex, findIndex, over, compose } from 'ramda';
import { selectRouteParam } from '../app.model';

const initialState: Personas = {
  loading: false,
  personas: null,
  selectOptions: {
    fundingStage: [],
    seniority: [],
    jobDepartment: [],
    numberOfEmployees: [],
  },
};

const personasReducer = createReducer(initialState,

  on(loadPersonasSuccess, (_, { personas, dataSets }) => {
    return {
      loading: false,
      personas: sortPersonas(personas),
      selectOptions: dataSets,
    };
  }),

  on(reorderPersonas, (state, { moved }) => {
    return assoc('personas', moved)(state);
  }),

  on(loadContactsSuccess, (state, { personaId, contacts, contactsCount }) => {
    const personaLens = lensIndex(
      findIndex(whereEq({ id: personaId }))(state.personas ?? [])
    );
    return evolve({
      loading: always(false),
      personas: over(
        personaLens,
        compose(
          assoc('contactsCount', contactsCount),
          assoc('contacts', contacts)
        )
      ) as () => Persona[],
    })(state);
  }),

);

export function reducer(state: Personas, action: Action) {
  return personasReducer(state, action);
}

export const selectPersonas = createFeatureSelector<Personas>('personas');

export const selectCurrentPersona = createSelector(
  selectRouteParam('personaId'),
  selectPersonas,
  (personaId, { personas }) => find(whereEq({ id: personaId }), personas ?? [])
);

const sortPersonas = sortWith<Persona>([
  ascend(prop('order'))
]);

export function contactCtor(contact: ContactDto): Contact {
  return {
    id: contact.id,
    image: contact.image,
    fullName: contact.firstName + ' ' + contact.lastName,
    jobTitle: contact.job.title || 'Mock job title',
    lastActivityDate: '' || 'Mock date',
    email: contact.email,
    phone: contact.phoneNumber || 'mock 111 11 11',
    company: contact.company || 'Mock company',
    industry: '' || 'Mock industry',
    companyLocation: '' || 'Mock company location',
    technologies: ['Mock technology'],
    contactLocation: '' || 'Mock contact location',
    fundingStage: '' || 'Mock funding stage',
    numberOfEmployees: 0,
  };
}

export function numberOfEmployeesCtor(
  { min, max }: { min: number; max: number; }
): string {
  if (max !== -1) {
    return `${min}-${max} employees`;
  } else {
    return `${min}+ employees`;
  }
}
