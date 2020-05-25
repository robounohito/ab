import { RouterReducerState, BaseRouterStoreState } from '@ngrx/router-store';

export interface App {
  router: RouterReducerState<BaseRouterStoreState>;
  shared: Shared;
}

export interface Shared {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  authToken: AuthToken;
}

export type AuthToken = string | null;
