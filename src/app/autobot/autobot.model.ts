import { on, createReducer, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { assoc } from 'ramda';
import { Autobot } from './autobot.types';
import { loadSuggestedSuccess, loadProspectSuccess, loadProspect } from './autobot.constants';
import { Prospect } from './autobot.types';

const initialState: Autobot = {
  suggestedActivities: [],
  currentProspect: {
    loading: false,
  } as Prospect
};

const autobotReducer = createReducer(initialState,

  on(loadSuggestedSuccess, (state, { suggested }) => {
    return assoc('suggestedActivities', suggested)(state);
  }),

  on(loadProspect, (state) => {
    return assoc('currentProspect', { loading: true })(state);
  }),

  on(loadProspectSuccess, (state, { prospect }) => {
    return assoc('currentProspect', prospect)(state);
  }),

);

export function reducer(state: Autobot, action: Action) {
  return autobotReducer(state, action);
}

export const selectAutobot = createFeatureSelector<Autobot>('autobot');

export const selectCurrentProspect = createSelector(
  selectAutobot,
  ({ currentProspect }) => currentProspect
);
