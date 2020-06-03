
import { createAction, props } from '@ngrx/store';
import { Dashboard } from './dashboard.types';

export const loadDashboard = createAction(
  '[Dashboard] Load Dashboard',
  props<{ selectedOutreach: Outreach; }>()
);

export const loadDashboardSuccess = createAction(
  '[Dashboard] Load Dashboard Success',
  props<{ outreachMetrics: Dashboard; }>()
);

export enum Outreach {
  all,
  daily,
  weekly,
  monthly,
  yearly
}
