import { /* on,  */createReducer, Action, createFeatureSelector } from '@ngrx/store';
// import { assoc } from 'ramda';
import { Admin } from './admin.types';

const initialState = {
};

const adminReducer = createReducer(initialState,

  /* on(loadSuggestedSuccess, (state, { suggested }) => {
    return assoc('suggestedActivities', suggested)(state);
  }), */

);

export function reducer(state: Admin, action: Action) {
  return adminReducer(state, action);
}

export const selectAutobot = createFeatureSelector<Admin>('admin');
