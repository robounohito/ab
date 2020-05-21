import { RouterReducerState, BaseRouterStoreState } from '@ngrx/router-store';

export interface App {
  router: RouterReducerState<BaseRouterStoreState>;
  currentUser: CurrentUser;
}

export interface CurrentUser {
  authToken: AuthToken;
}

export type AuthToken = {
  Authorization: string;
  sessionExpiration: string;
  sessionId: string;
} | null;
