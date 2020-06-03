
export interface Dashboard {
  _id: number;
  email_open: number;
  email_not_open: number;
  email_replied: number;
  email_not_replied: number;
  total_email: number;
  open_rate: string;
  replied_rate: string;
}
