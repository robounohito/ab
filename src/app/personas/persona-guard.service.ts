import { Injectable } from '@angular/core';
import { map, take, tap, filter } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { App } from '../app.types';
import { loadContacts } from './personas.constants';
import { selectCurrentPersona } from './personas.model';


@Injectable()
export class PersonaGuard implements CanActivate {

  constructor(
    private store: Store<App>,
  ) { }

  canActivate() {
    return this.store.select(selectCurrentPersona).pipe(
      filter(persona => !!persona),
      take(1),
      tap(persona => {
        return persona && this.store.dispatch(loadContacts({ personaId: persona.id, offset: 0, limit: 10 }));
      }),
      map(() => true),
    );
  }

}
