
import { Injectable } from '@angular/core';
import { switchMap, map, startWith, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import { Prospect } from '../app.types';
import { loadProspects, loadProspectsSuccess, loadPersonas, loadPersonasSuccess, reorderPersonas } from './personas.constants';
import { of } from 'rxjs';
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

  loadProspects$ = createEffect(() => this.actions$.pipe(
    ofType(loadProspects),
    switchMap(({ page }) => page.pipe(
      startWith(of({})),
      switchMap(() => this.api.request<Prospect[]>({
        endpoint: this.api.endpoint.getProspects,
      }).pipe(
        map(resp => loadProspectsSuccess({ prospects: resp }))
      )))
    ))
  );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }

}
