import { Prospect } from '../app.types';

export interface Autobot {
  suggestedActivities: SuggestedActivity[];
  currentProspect: Prospect;
}

export interface SuggestedActivity {
  reason: string;
  prospects: Prospect[];
  activity: string;
  job_titles: string[];
  companies: string[];
  campaign_id: number;
}

