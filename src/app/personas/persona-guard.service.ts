import { Injectable } from '@angular/core';
import { map, take, tap, filter, exhaustMap } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { App } from '../app.types';
import { loadContacts } from './personas.constants';
import { selectPersonas, selectCurrentPersona } from './personas.model';
import { Route } from '../app.constants';

@Injectable()
export class PersonaGuard implements CanActivate {

  constructor(
    private store: Store<App>,
    private router: Router,
  ) { }

  canActivate() {
    return this.store.select(selectPersonas).pipe(
      filter(state => !!state.personas),
      exhaustMap(() => this.store.select(selectCurrentPersona)),
      take(1),
      tap(persona => {
        return persona && this.store.dispatch(loadContacts({ personaId: persona.id, offset: 0, limit: 10 }));
      }),
      map(persona => !!persona || this.router.parseUrl(`/${Route.notFound}`)),
    );
  }

}
