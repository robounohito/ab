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

export interface Prospect {
  loading: boolean;
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  title: string;
  job_title: string;
  company: string;
  image: string;
}
