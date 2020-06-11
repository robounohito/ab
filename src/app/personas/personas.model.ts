
import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { Personas } from './personas.types';
import { loadProspectsSuccess } from './personas.constants';

const initialState: Personas = {
  loading: false,
  prospects: [],
};

const personasReducer = createReducer(initialState,

  on(loadProspectsSuccess, (_, { prospects }) => {
    return {
      loading: false,
      prospects,
    };
  }),

);

export function reducer(state: Personas, action: Action) {
  return personasReducer(state, action);
}

export const selectPersonas = createFeatureSelector<Personas>('personas');
