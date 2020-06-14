
import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { Personas, Persona } from './personas.types';
import { loadProspectsSuccess, loadPersonasSuccess, reorderPersonas } from './personas.constants';
import { sortWith, ascend, prop, assoc } from 'ramda';

const initialState: Personas = {
  loading: false,
  personas: [],
  currentContacts: [],
};

const personasReducer = createReducer(initialState,

  on(loadPersonasSuccess, (state, { personas }) => {
    return {
      ...state,
      loading: false,
      personas: sortPersonas(personas),
    };
  }),

  on(reorderPersonas, (state, { moved }) => {
    return assoc('personas', moved)(state);
  }),

  on(loadProspectsSuccess, (state, { prospects }) => {
    return {
      ...state,
      loading: false,
      currentContacts: prospects,
    };
  }),

);

export function reducer(state: Personas, action: Action) {
  return personasReducer(state, action);
}

export const selectPersonas = createFeatureSelector<Personas>('personas');

const sortPersonas = sortWith<Persona>([
  ascend(prop('order'))
]);
