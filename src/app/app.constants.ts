import { createAction, props } from '@ngrx/store';
import { AuthToken } from './app.types';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const readToken = createAction(
  '[App] Read Token',
);

export const readTokenSuccess = createAction(
  '[App] Read Token Success',
  props<{ authToken: AuthToken; }>()
);

export const navigateToLogin = createAction(
  '[App] Navigate To Login',
);

export const initAuth = createAction(
  '[App] Init Auth',
  props<{ email: string }>()
);

export const logout = createAction(
  '[App] Logout',
);

export const notification = createAction(
  '[App] Notification',
  props<{
    message: string;
    action: string;
    config?: MatSnackBarConfig
  }>()
);

export enum Route {
  login = 'login',
  signup = 'signup',
  recovery = 'recovery',
  reset = 'reset',
}
