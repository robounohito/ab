import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { readToken, readTokenSuccess, navigateToLogin, logout, notification, authTokenKey, loadUserProfile, loadUserProfileSuccess } from './app.constants';
import { tap, switchMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './_core/api/api.service';
import { fromEvent, EMPTY, forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route } from './app.constants';
import { CurrentUser } from './app.types';

@Injectable()
export class AppEffects {

  readToken$ = createEffect(() => this.actions$.pipe(
    ofType(readToken),
    map(() => readTokenSuccess({
      authToken: localStorage.getItem(authTokenKey)
    }))
  ));

  navigateToLogin$ = createEffect(() => this.actions$.pipe(
    ofType(navigateToLogin),
    tap(() => this.router.navigate([`/${Route.login}`])),
  ), { dispatch: false });

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => localStorage.removeItem(authTokenKey)),
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
      if (key === authTokenKey) {
        return [
          readTokenSuccess({ authToken }),
          ...(!authToken ? [navigateToLogin()] : [])
        ];
      } else {
        return EMPTY;
      }
    })
  ));

  loadUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserProfile),
    switchMap(() => forkJoin([
      this.api.request<CurrentUser>({
        endpoint: this.api.endpoint.getUserProfile,
      }),
      this.api.request<{ contactsToCall: number }>({
        endpoint: this.api.endpoint.getStats,
      })
    ]).pipe(
      map(([userProfile, { contactsToCall }]) => loadUserProfileSuccess({
        userProfile: { ...userProfile, contactsToCall }
      })),
    )),
  ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private api: ApiService,
    private snackBar: MatSnackBar,
  ) { }

}
