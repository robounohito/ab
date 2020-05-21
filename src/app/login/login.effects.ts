import { Injectable } from '@angular/core';
import { switchMap, tap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, signup, recovery, reset } from './login.constants';
import { Router } from '@angular/router';
import { ApiService } from '../_core/api/api.service';
import { readToken } from '../app.constants';
import { AuthToken } from '../app.types';
import { Route } from '../app.constants';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(({ payload }) => this.api.request<{ login: AuthToken }>({
      endpoint: this.api.endpoint.postLogin,
      data: { userId: payload.email, pwd: payload.password }
    })),
    tap(resp => {
      localStorage.setItem('auth_token', JSON.stringify(resp.login));
      this.router.navigate(['/']);
    }),
    map(() => readToken()),
  ));

  signup$ = createEffect(() => this.actions$.pipe(
    ofType(signup),
    switchMap(({ payload }) => this.api.request<{ account: AuthToken }>({
      endpoint: this.api.endpoint.postSignup,
      data: { email: payload.email, phone: payload.phone, pwd: payload.password }
    })),
    tap(resp => {
      localStorage.setItem('auth_token', JSON.stringify(resp.account));
      this.router.navigate(['/']);
    }),
    map(() => readToken()),
  ));

  recovery$ = createEffect(() => this.actions$.pipe(
    ofType(recovery),
    switchMap(({ payload }) => this.api.request({
      endpoint: this.api.endpoint.postRecover,
      data: { userId: payload.email, recoveryType: payload.recoveryType, }
    })),
    tap(() => {
      this.router.navigate(['/', Route.login, Route.reset]);
    }),
  ), { dispatch: false });


  reset$ = createEffect(() => this.actions$.pipe(
    ofType(reset),
    switchMap(({ payload }) => this.api.request<{ account: AuthToken }>({
      endpoint: this.api.endpoint.postReset,
      data: { userId: payload.email, recoveryCode: payload.recoveryCode, newPwd: payload.password }
    })),
    tap(resp => {
      localStorage.setItem('auth_token', JSON.stringify(resp.account));
      this.router.navigate(['/']);
    }),
    map(() => readToken()),
  ));

  constructor(
    private actions$: Actions,
    private router: Router,
    private api: ApiService,
  ) { }

}
