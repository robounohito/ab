import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { App } from 'src/app/app.types';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/app.model';
import { Route } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private store: Store<App>,
    private router: Router,
  ) { }

  canActivate() {
    return this.store.select(selectCurrentUser).pipe(
      take(1),
      map(({ authToken }) => !!authToken || this.router.parseUrl(`/${Route.login}`))
    );
  }

  canActivateChild() {
    return this.canActivate();
  }

}
