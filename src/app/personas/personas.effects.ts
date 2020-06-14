
import { Injectable } from '@angular/core';
import { switchMap, map, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import { Prospect } from '../app.types';
import { loadContacts, loadContactsSuccess, loadPersonas, loadPersonasSuccess, reorderPersonas } from './personas.constants';
import { Persona } from './personas.types';

@Injectable()
export class PersonasEffects {

  loadPersonas$ = createEffect(() => this.actions$.pipe(
    ofType(loadPersonas),
    switchMap(() => this.api.request<Persona[]>({
      endpoint: this.api.endpoint.getPersonas,
    }).pipe(
      map(resp => loadPersonasSuccess({ personas: resp }))
    )))
  );

  reorderPersonas$ = createEffect(() => this.actions$.pipe(
    ofType(reorderPersonas),
    tap(({ original, moved }) => console.log(
      'reorder effect',
      moved.filter((m, i) => m.id !== original[i].id)
    ))
  ), { dispatch: false });

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(loadContacts),
    switchMap(({ personaId }) => this.api.request<{ contacts: Prospect[] }>({
      endpoint: this.api.endpoint.getContacts,
      queryParams: { limit: 10, offset: 0 },
    }).pipe(
      map(resp => loadContactsSuccess({ personaId, contacts: resp.contacts }))
    ))
  ));

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }

}
