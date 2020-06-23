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
      exhaustMap(personas => this.store.select(selectCurrentPersona).pipe(
        map(persona => ({ persona, contactsPage: personas.contactsPage }))
      )),
      take(1),
      tap(({ persona, contactsPage }) => {
        return persona && this.store.dispatch(loadContacts({
          personaId: persona.id,
          contactsPage: { ...contactsPage, pageIndex: 0 }
        }));
      }),
      map(persona => !!persona || this.router.parseUrl(`/${Route.notFound}`)),
    );
  }

}
