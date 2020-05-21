import { ActionReducerMap, createSelector, MetaReducer, on, createReducer } from '@ngrx/store';
import { getSelectors, routerReducer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { App, CurrentUser } from './app.types';
import { readTokenSuccess } from './app.constants';
import { assoc } from 'ramda';

const initialState: CurrentUser = {
  authToken: null
};

const currentUserReducer = createReducer(initialState,

  on(readTokenSuccess, (state, { authToken }) => {
    return assoc('authToken', authToken, state);
  }),

);

export const reducers: ActionReducerMap<App> = {
  router: routerReducer,
  currentUser: currentUserReducer
};

export const selectRouter = createSelector((state: App) => state.router, v => v);

export const selectCurrentUser = createSelector((state: App) => state.currentUser, v => v);

export const { selectCurrentRoute, selectQueryParams, selectQueryParam,
  selectRouteParams, selectRouteParam, selectRouteData, selectUrl, } = getSelectors(selectRouter);

export const metaReducers: MetaReducer<App>[] = !environment.production ? [] : [];
