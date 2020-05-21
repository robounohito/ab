import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import { loadSettings, loadSettingsSuccess } from './navbar.constants';
import { Settings } from './navbar.types';

@Injectable()
export class NavbarEffects {

  loadSettings$ = createEffect(() => this.actions$.pipe(
    ofType(loadSettings),
    switchMap(() => this.api.request<{ settings: { settings: Settings } }>({
      endpoint: this.api.endpoint.getSettings,
    }).pipe(
      map(resp => loadSettingsSuccess({ settings: resp.settings.settings })),
    )),
  ));

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }

}
