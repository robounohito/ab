import { RouterReducerState, BaseRouterStoreState } from '@ngrx/router-store';
import { Role } from './app.constants';

export interface App {
  router: RouterReducerState<BaseRouterStoreState>;
  shared: Shared;
}

export interface Shared {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  id: string;
  authToken: AuthToken;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  role: { name: Role; };
  contactsToCall: number;
}

export type AuthToken = string | null;
