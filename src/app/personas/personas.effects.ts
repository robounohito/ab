
import { Injectable } from '@angular/core';
import { switchMap, map, startWith } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import { Prospect } from '../app.types';
import { loadProspects, loadProspectsSuccess } from './personas.constants';
import { of } from 'rxjs';

@Injectable()
export class PersonasEffects {

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
