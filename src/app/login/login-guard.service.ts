import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLogin } from './login.model';
import { loginReset } from './login.constants';

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {

  constructor(
    private store: Store,
  ) { }

  canActivate() {
    return this.store.select(selectLogin).pipe(
      take(1),
      tap(({ error }) => error && this.store.dispatch(loginReset())),
      map(() => true),
    );
  }

  canActivateChild() {
    return this.canActivate();
  }

}
