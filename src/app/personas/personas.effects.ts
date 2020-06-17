
import { Injectable } from '@angular/core';
import { switchMap, map, tap, shareReplay } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import { loadContacts, loadContactsSuccess, loadPersonas, loadPersonasSuccess, reorderPersonas } from './personas.constants';
import { Persona, ContactDto, SelectOptions } from './personas.types';
import { contactCtor, numberOfEmployeesCtor } from './personas.model';
import { memoizeWith, identity } from 'ramda';
import { forkJoin } from 'rxjs';

@Injectable()
export class PersonasEffects {

  loadPersonas$ = createEffect(() => this.actions$.pipe(
    ofType(loadPersonas),
    switchMap(() => forkJoin([
      this.getDataSets(),
      this.api.request<Persona[]>({
        endpoint: this.api.endpoint.getPersonas,
      })
    ]).pipe(
      map(([
        [{ fundingStage }, { seniority }, { jobDepartment }, { numberOfEmployees }],
        personas
      ]) => loadPersonasSuccess({
        personas,
        dataSets: {
          fundingStage,
          seniority,
          jobDepartment,
          numberOfEmployees: numberOfEmployees.map(numberOfEmployeesCtor),
        }
      }))
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
    switchMap(({ personaId, offset, limit }) => this.api.request<{ contacts: ContactDto[]; count: number; }>({
      endpoint: this.api.endpoint.getContacts,
      queryParams: { limit, offset },
    }).pipe(
      map(resp => loadContactsSuccess({
        personaId,
        contacts: resp.contacts.map(contactCtor),
        contactsCount: resp.count,
      }))
    ))
  ));

  private getDataSets = memoizeWith(
    identity as () => string,
    () => {
      return forkJoin([
        this.api.request<{ fundingStage: SelectOptions }>({
          endpoint: this.api.endpoint.getFundingStage,
        }),
        this.api.request<{ seniority: SelectOptions }>({
          endpoint: this.api.endpoint.getSeniority,
        }),
        this.api.request<{ jobDepartment: SelectOptions }>({
          endpoint: this.api.endpoint.getJobDepartment,
        }),
        this.api.request<{ numberOfEmployees: { min: number; max: number; }[]; }>({
          endpoint: this.api.endpoint.getNumberOfEmployees,
        }),
      ]).pipe(
        shareReplay(1)
      );
    }
  );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }

}
