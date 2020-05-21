
export type Campaigns = {
  loading: boolean;
  campaignList: Campaign[];
};

export interface Campaign {
  __v: number;
  _id: string;
  activation_date: string;
  calls: [];
  campaign_id: string;
  campaign_name: string;
  company_name: string;
  contact_id: number;
  created: string;
  created_by: string;
  current_branch: string;
  email: string;
  first_reply: boolean;
  job_title: string;
  modified: string;
  modified_by: string;
  origEmails: CampaignSequence;
  owner: string;
  prospect_name: string;
  status: boolean;
  steps: [];
  steps_completed: number;
  steps_total: number;
}

export interface Email {
  calltoaction: string;
  greeting: string;
  opener: string;
  pitch: string;
  reason: string;
  role: string;
  signiture: string;
  signoff: string;
  subject: string;
}

export interface CampaignSequence {
  campaign_id: number;
  campaign_name: string;
  intro1: Email;
  intro2: Email;
  intro3: Email;
  linkinClicked: Email;
  linkinClicked2: Email;
  productUrlClicked: Email;
  productUrlClicked2: Email;
}
