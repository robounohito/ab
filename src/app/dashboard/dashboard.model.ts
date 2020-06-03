
import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { loadDashboardSuccess } from './dashboard.constants';
import { Dashboard } from './dashboard.types';

const initialState: Dashboard = {} as Dashboard;

const dashboardReducer = createReducer(initialState,

  on(loadDashboardSuccess, (_, { outreachMetrics }) => {
    return outreachMetrics;
  }),

);

export function reducer(state: Dashboard, action: Action) {
  return dashboardReducer(state, action);
}

export const selectDashboard = createFeatureSelector<Dashboard>('dashboard');
