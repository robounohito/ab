import { Injectable } from '@angular/core';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, signup, recovery, reset, loginError, LoginError } from './login.constants';
import { Router } from '@angular/router';
import { ApiService } from '../_core/api/api.service';
import { readToken, authTokenKey } from '../app.constants';
import { AuthToken } from '../app.types';
import { Route } from '../app.constants';
import { of, EMPTY } from 'rxjs';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(({ payload }) => this.api.request<{ token: AuthToken }>({
      endpoint: this.api.endpoint.postLogin,
      data: {
        email: payload.email,
        password: payload.password,
        persistSession: payload.rememberMe
      },
      queryParams: { bypassHttpErrorInterceptor: true }
    }).pipe(
      tap(resp => {
        localStorage.setItem(authTokenKey, JSON.stringify(resp.token));
        this.router.navigate(['/']);
      }),
      map(() => readToken()),
      catchError(() => of(loginError({ error: LoginError.invalidEmailOrPassword })))
    )),
  ));

  signup$ = createEffect(() => this.actions$.pipe(
    ofType(signup),
    switchMap(({ payload }) => this.api.request<{ token: AuthToken }>({
      endpoint: this.api.endpoint.postSignup,
      data: payload,
      queryParams: { bypassHttpErrorInterceptor: true }
    }).pipe(
      tap(resp => {
        localStorage.setItem(authTokenKey, JSON.stringify(resp.token));
        this.router.navigate(['/']);
      }),
      map(() => readToken()),
      catchError(() => of(loginError({ error: LoginError.invalidInput })))
    )),
  ));

  recovery$ = createEffect(() => this.actions$.pipe(
    ofType(recovery),
    switchMap(({ payload }) => this.api.request({
      endpoint: this.api.endpoint.postRecover,
      data: { mail: payload.email, recoveryType: payload.recoveryType, },
      queryParams: { bypassHttpErrorInterceptor: true }
    }).pipe(
      tap(() => {
        this.router.navigate(['/', Route.login, Route.reset]);
      }),
      switchMap(() => EMPTY),
      catchError(() => of(loginError({ error: LoginError.invalidInput }))),
    )),
  ));

  reset$ = createEffect(() => this.actions$.pipe(
    ofType(reset),
    switchMap(({ payload }) => this.api.request<{ account: AuthToken }>({
      endpoint: this.api.endpoint.postReset,
      data: {
        email: payload.email,
        code: payload.recoveryCode,
        password: payload.password
      },
      queryParams: { bypassHttpErrorInterceptor: true },
    }).pipe(
      tap(resp => {
        localStorage.setItem(authTokenKey, JSON.stringify(resp.account));
        this.router.navigate(['/']);
      }),
      map(() => readToken()),
      catchError(() => of(loginError({ error: LoginError.invalidInput }))),
    )),
  ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private api: ApiService,
  ) { }

}
