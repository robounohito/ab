import { Injectable } from '@angular/core';
import { map, tap, take, } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { App } from '../app.types';
import { loadPersonas } from './personas.constants';
import { selectPersonas } from './personas.model';

@Injectable()
export class PersonasGuard implements CanActivate {

  constructor(
    private store: Store<App>,
  ) { }

  canActivate() {
    return this.store.select(selectPersonas).pipe(
      take(1),
      tap(({ personas }) => {
        if (!personas) { this.store.dispatch(loadPersonas()); }
      }),
      map(() => true),
    );
  }

}
