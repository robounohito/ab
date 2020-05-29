import { createAction, props } from '@ngrx/store';
import { Campaign } from './campaigns.types';

export const loadCampaigns = createAction(
  '[Campaigns] Load Campaigns',
);

export const loadCampaignsSuccess = createAction(
  '[Campaigns] Load Campaigns Success',
  props<{ campaigns: Campaign[]; }>()
);
