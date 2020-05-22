import { Injectable } from '@angular/core';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, signup, recovery, reset, loginError } from './login.constants';
import { Router } from '@angular/router';
import { ApiService } from '../_core/api/api.service';
import { readToken } from '../app.constants';
import { AuthToken } from '../app.types';
import { Route } from '../app.constants';
import { of, EMPTY } from 'rxjs';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(({ payload }) => this.api.request<{ login: AuthToken }>({
      endpoint: this.api.endpoint.postLogin,
      data: {
        userId: payload.email,
        pwd: payload.password,
        persistSession: payload.rememberMe
      },
      queryParams: { bypassHttpErrorInterceptor: true }
    }).pipe(
      tap(resp => {
        localStorage.setItem('auth_token', JSON.stringify(resp.login));
        this.router.navigate(['/']);
      }),
      map(() => readToken()),
      catchError(err => of(loginError(err.error.message)))
    )),
  ));

  signup$ = createEffect(() => this.actions$.pipe(
    ofType(signup),
    switchMap(({ payload }) => this.api.request<{ account: AuthToken }>({
      endpoint: this.api.endpoint.postSignup,
      data: { email: payload.email, phone: payload.phone, pwd: payload.password },
      queryParams: { bypassHttpErrorInterceptor: true }
    }).pipe(
      tap(resp => {
        localStorage.setItem('auth_token', JSON.stringify(resp.account));
        this.router.navigate(['/']);
      }),
      map(() => readToken()),
      catchError(err => of(loginError(err.error.message)))
    )),
  ));

  recovery$ = createEffect(() => this.actions$.pipe(
    ofType(recovery),
    switchMap(({ payload }) => this.api.request({
      endpoint: this.api.endpoint.postRecover,
      data: { userId: payload.email, recoveryType: payload.recoveryType, },
      queryParams: { bypassHttpErrorInterceptor: true }
    }).pipe(
      tap(() => {
        this.router.navigate(['/', Route.login, Route.reset]);
      }),
      switchMap(() => EMPTY),
      catchError(err => of(loginError(err.error.message))),
    )),
  ));

  reset$ = createEffect(() => this.actions$.pipe(
    ofType(reset),
    switchMap(({ payload }) => this.api.request<{ account: AuthToken }>({
      endpoint: this.api.endpoint.postReset,
      data: {
        userId: payload.email,
        recoveryCode: payload.recoveryCode,
        newPwd: payload.password
      },
      queryParams: { bypassHttpErrorInterceptor: true },
    }).pipe(
      tap(resp => {
        localStorage.setItem('auth_token', JSON.stringify(resp.account));
        this.router.navigate(['/']);
      }),
      map(() => readToken()),
      catchError(err => of(loginError(err.error.message))),
    )),
  ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private api: ApiService,
  ) { }

}
