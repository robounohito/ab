import { ActionReducerMap, createSelector, MetaReducer, on, createReducer } from '@ngrx/store';
import { getSelectors, routerReducer } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { App, Shared, CurrentUser } from './app.types';
import { readTokenSuccess, loadUserProfileSuccess } from './app.constants';
import { assocPath, mergeRight, evolve } from 'ramda';

const initialState: Shared = {
  currentUser: {
    authToken: null
  } as CurrentUser
};

const sharedReducer = createReducer(initialState,

  on(readTokenSuccess, (state, { authToken }) => {
    return assocPath(['currentUser', 'authToken'], authToken, state);
  }),

  on(loadUserProfileSuccess, (state, { userProfile }) => {
    return evolve({
      currentUser: mergeRight(userProfile),
    })(state);
  }),

);

export const reducers: ActionReducerMap<App> = {
  router: routerReducer,
  shared: sharedReducer
};

export const selectRouter = createSelector((state: App) => state.router, v => v);

export const selectShared = createSelector((state: App) => state.shared, v => v);

export const selectCurrentUser = createSelector(
  selectShared,
  state => state.currentUser
);

export const { selectCurrentRoute, selectQueryParams, selectQueryParam,
  selectRouteParams, selectRouteParam, selectRouteData, selectUrl, } = getSelectors(selectRouter);

export const metaReducers: MetaReducer<App>[] = !environment.production ? [] : [];
