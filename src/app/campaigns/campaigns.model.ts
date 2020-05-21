import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { Campaigns } from './campaigns.types';
import { loadCampaignsSuccess, loadCampaigns } from './campaigns.constants';
import { assoc } from 'ramda';

const initialState: Campaigns = {
  loading: false,
  campaignList: []
};

const campaignsReducer = createReducer(initialState,

  on(loadCampaigns, (state) => {
    return assoc('loading', true)(state);
  }),

  on(loadCampaignsSuccess, (_, { campaigns }) => {
    return {
      loading: false,
      campaignList: campaigns,
    };
  }),

);

export function reducer(state: Campaigns, action: Action) {
  return campaignsReducer(state, action);
}

export const selectCampaings = createFeatureSelector<Campaigns>('campaigns');
