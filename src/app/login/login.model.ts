import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { Login } from './login.types';
import { loginError, login, signup, loginReset, recovery, reset } from './login.constants';
import { assoc } from 'ramda';

const initialState: Login = {
  loading: false,
  error: '',
};

const loginReducer = createReducer(initialState,

  on(loginReset, () => {
    return initialState;
  }),

  on(login, signup, recovery, reset, (state) => {
    return assoc('loading', true)(state);
  }),

  on(loginError, (_, { error }) => {
    return { loading: false, error };
  }),

);

export function reducer(state: Login, action: Action) {
  return loginReducer(state, action);
}

export const selectLogin = createFeatureSelector<Login>('login');
