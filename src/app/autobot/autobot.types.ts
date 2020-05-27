export interface Autobot {
  suggestedActivities: SuggestedActivity[];
}

export interface SuggestedActivity {
  reason: string;
  prospects: string[];
  activity: string;
  job_titles: string[];
  companies: string[];
  campaign_id: number;
}
