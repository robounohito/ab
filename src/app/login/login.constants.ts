import { createAction, props } from '@ngrx/store';

export const loginReset = createAction(
  '[Login] Login  Reset',
);

export const login = createAction(
  '[Login] Login',
  props<{
    payload: {
      email: string;
      password: string;
      rememberMe: boolean;
    }
  }>()
);

export const loginError = createAction(
  '[Login] Login Error',
  props<{ error: string }>()
);

export const signup = createAction(
  '[Login] Signup',
  props<{
    payload: {
      email: string;
      phone: string;
      password: string;
    }
  }>()
);

export const recovery = createAction(
  '[Login] Recovery',
  props<{
    payload: {
      email: string;
      recoveryType: 'email' | 'phone';
    }
  }>()
);

export const reset = createAction(
  '[Login] Reset',
  props<{
    payload: {
      email: string;
      recoveryCode: string;
      password: string;
    }
  }>()
);

export const invalidCredentials = 1;
