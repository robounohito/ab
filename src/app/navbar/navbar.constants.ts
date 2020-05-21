
import { createAction, props } from '@ngrx/store';
import { Settings } from './navbar.types';

export const loadSettings = createAction(
  '[Navbar] Load Settings',
);

export const loadSettingsSuccess = createAction(
  '[Navbar] Load Settings Success',
  props<{ settings: Settings }>()
);

export const blankProfiilePic = '/assets/img/blank_profile.png';

export const navbarMenu = [{
  path: 'autobot',
  title: 'Autobot',
  icon: 'assignment_ind',
}, {
  path: 'campaigns',
  title: 'Active Campaigns',
  icon: 'arrow_forward_ios'
}, {
  path: 'contacts',
  title: 'Contacts to Call',
  icon: 'phone'
}, {
  title: 'Persona Creation',
  icon: 'person',
  collapse: 'person',
  submenu: [
    {
      path: 'persona/1',
      title: 'Persona 1',
      icon: 'looks_one'
    },
    {
      path: 'persona/2',
      title: 'Persona 2',
      icon: 'looks_two'
    },
    {
      path: 'persona/3',
      title: 'Persona 3',
      icon: 'looks_3'
    }
  ]
}, {
  path: 'triggers',
  title: 'Trigger Selection',
  icon: 'select_all'
}, /* {
  path: 'custom-snippet-creation',
  title: 'Custom Pitch Creation',
  icon: 'create'
}, */ {
  path: 'settings',
  title: 'Settings',
  icon: 'settings'
}, {
  path: 'news',
  title: 'New News Trainer',
  icon: 'search'
}, {
  path: 'dashboard',
  title: 'Rep Dashboard',
  icon: 'dashboard'
}];