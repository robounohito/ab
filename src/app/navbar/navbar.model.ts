import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { loadSettingsSuccess } from './navbar.constants';
import { Navbar } from './navbar.types';
import { blankProfiilePic } from '../app.constants';

const initialState: Navbar = {
  profile_img_link: blankProfiilePic
} as Navbar;

const navbarReducer = createReducer(initialState,

  on(loadSettingsSuccess, (state, { settings }) => {
    return { ...state, ...settings };
  }),

);

export function reducer(state: Navbar, action: Action) {
  return navbarReducer(state, action);
}

export const selectNavbar = createFeatureSelector<Navbar>('navbar');
