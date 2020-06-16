import { createAction, props } from '@ngrx/store';
import { SuggestedActivity } from './autobot.types';
import { Prospect } from './autobot.types';

export const loadSuggestedActivities = createAction(
  '[Autobot] Load Suggested Activities',
);

export const loadSuggestedSuccess = createAction(
  '[Autobot] Load Suggested Success',
  props<{ suggested: SuggestedActivity[]; }>()
);

export const loadProspect = createAction(
  '[Autobot] Load Prospect',
  props<{ prospectId: string; }>()
);

export const loadProspectSuccess = createAction(
  '[Autobot] Load Prospect Success',
  props<{ prospect: Prospect; }>()
);
