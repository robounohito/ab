import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { assoc } from 'ramda';
import { Autobot } from './autobot.types';
import { loadSuggestedSuccess } from './autobot.constants';

const initialState: Autobot = {
  suggestedActivities: [],
};

const autobotReducer = createReducer(initialState,

  on(loadSuggestedSuccess, (state, { suggested }) => {
    return assoc('suggestedActivities', suggested)(state);
  }),

);

export function reducer(state: Autobot, action: Action) {
  return autobotReducer(state, action);
}

export const selectAutobot = createFeatureSelector<Autobot>('autobot');
