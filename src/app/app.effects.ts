import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { readToken, readTokenSuccess, navigateToLogin, initAuth, logout, notification } from './app.constants';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './_core/api/api.service';
import { forkJoin, fromEvent, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route } from './app.constants';

@Injectable()
export class AppEffects {

  readToken$ = createEffect(() => this.actions$.pipe(
    ofType(readToken),
    switchMap(() => {
      const authToken = localStorage.getItem('auth_token');
      return [
        readTokenSuccess({
          authToken: authToken ? JSON.parse(authToken) : null
        }),
        // ...(authToken ? [initAuth({ email: 'eric@autobound.ai' })] : [])
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
    tap(() => localStorage.removeItem('auth_token')),
    switchMap(() => this.api.request({
      endpoint: this.api.endpoint.getLogout,
    })),
    switchMap(() => [
      navigateToLogin(),
      readTokenSuccess({ authToken: null })
    ]),
  ));

  notification$ = createEffect(() => this.actions$.pipe(
    ofType(notification),
    tap(({ message, action, config }) => this.snackBar.open(message, action, config)),
  ), { dispatch: false });

  storage$ = createEffect(() => fromEvent<StorageEvent>(window, 'storage').pipe(
    switchMap(({ key, newValue: authToken }) => {
      if (key === 'auth_token') {
        return [
          readTokenSuccess({ authToken }),
          ...(!authToken ? [navigateToLogin()] : [])
        ];
      } else {
        return EMPTY;
      }
    })
  ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private api: ApiService,
    private snackBar: MatSnackBar,
  ) { }

}
