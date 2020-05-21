import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { readToken, readTokenSuccess, navigateToLogin, initAuth, logout, notification } from './app.constants';
import { map, tap, switchMap, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from './_core/api/api.service';
import { App } from './app.types';
import { forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route } from './app.constants';

@Injectable()
export class AppEffects {

  readToken$ = createEffect(() => this.actions$.pipe(
    ofType(readToken),
    flatMap(() => {
      const autToken = localStorage.getItem('auth_token');
      return [
        readTokenSuccess({
          authToken: autToken ? JSON.parse(autToken) : null
        }),
        ...(autToken ? [initAuth({ email: 'eric@autobound.ai' })] : [])
      ];
    })
  ));

  navigateToLogin$ = createEffect(() => this.actions$.pipe(
    ofType(navigateToLogin),
    tap(() => this.router.navigate([`/${Route.login}`])),
  ), { dispatch: false });

  initAuth$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth),
    switchMap(action => forkJoin([
      this.api.request({
        endpoint: this.api.endpoint.getHubspotAuth,
        urlParams: { email: action.email },
      }),
      this.api.request({
        endpoint: this.api.endpoint.getGmailAuth,
      }),
    ])),
  ), { dispatch: false });

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => {
      localStorage.removeItem('auth_token');
      this.store.dispatch(navigateToLogin());
    }),
    map(() => readTokenSuccess({ authToken: null })),
  ));

  notification$ = createEffect(() => this.actions$.pipe(
    ofType(notification),
    tap(({ message, action, config }) => this.snackBar.open(message, action, config)),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<App>,
    private api: ApiService,
    private snackBar: MatSnackBar,
  ) { }

}
