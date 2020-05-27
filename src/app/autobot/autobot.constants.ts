import { createAction, props } from '@ngrx/store';
import { SuggestedActivity } from './autobot.types';

export const loadSuggestedActivities = createAction(
  '[Autobot] Load Suggested Activities',
);

export const loadSuggestedSuccess = createAction(
  '[Autobot] Load Suggested Success',
  props<{ suggested: SuggestedActivity[] }>()
);
