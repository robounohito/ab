export interface Autobot {
  suggestedActivities: SuggestedActivity[];
}

export interface SuggestedActivity {
  reason: string;
  prospects: Prospect[];
  activity: string;
  job_titles: string[];
  companies: string[];
  campaign_id: number;
}

export interface Prospect {
  id: string;
  name: string;
}
