
import { Injectable } from '@angular/core';
import { switchMap, map, tap, shareReplay, concatMap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import {
  loadContacts, loadContactsSuccess, loadPersonas, loadPersonasSuccess, reorderPersonas,
  personaChange, personaCreate, personaCreateSuccess, removePersona
} from './personas.constants';
import { ContactDto, SelectOptions, PersonaDto } from './personas.types';
import {
  contactFromDto, numberOfEmployeesFromDto, personaFromDto, selectCurrentPersona,
  personaToDto, createPersona
} from './personas.model';
import { memoizeWith, identity, } from 'ramda';
import { forkJoin, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { App } from '../app.types';
import { Router } from '@angular/router';
import { Route } from '../app.constants';

@Injectable()
export class PersonasEffects {

  loadPersonas$ = createEffect(() => this.actions$.pipe(
    ofType(loadPersonas),
    switchMap(() => forkJoin([
      this.getDataSets(),
      this.api.request<{ personas: PersonaDto[] }>({
        endpoint: this.api.endpoint.getPersonas,
        queryParams: { limit: 100 },
      })
    ]).pipe(
      map(([
        [{ fundingStage }, { seniority }, { jobDepartment }, { numberOfEmployees }],
        personasResp
      ]) => loadPersonasSuccess({
        personas: personasResp.personas.map(personaFromDto),
        dataSets: {
          fundingStage,
          seniority,
          jobDepartment,
          numberOfEmployees: numberOfEmployees.map(numberOfEmployeesFromDto),
        }
      }))
    )))
  );

  reorderPersonas$ = createEffect(() => this.actions$.pipe(
    ofType(reorderPersonas),
    switchMap(({ original, moved }) => {
      const reordered = moved.filter((m, i) => m.id !== original[i].id);
      return forkJoin(reordered.map(p => this.api.request({
        endpoint: this.api.endpoint.patchPersona,
        urlParams: { id: p.id },
        data: { order: p.order },
      })));
    })
  ), { dispatch: false });

  updatePersona$ = createEffect(() => this.actions$.pipe(
    ofType(personaChange),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectCurrentPersona)))
    )),
    switchMap(([{ personaId, path }, persona]) => {
      return this.api.request({
        endpoint: this.api.endpoint.patchPersona,
        urlParams: { id: personaId },
        data: persona ? personaToDto(persona, path[0]) : {},
      });
    })
  ), { dispatch: false });

  createPersona$ = createEffect(() => this.actions$.pipe(
    ofType(personaCreate),
    switchMap(({ order }) => {
      const newPersona = createPersona(order);
      return this.api.request<{ id: string; }>({
        endpoint: this.api.endpoint.postPersona,
        data: personaToDto(newPersona),
      }).pipe(
        map(resp => personaCreateSuccess({
          persona: {
            ...newPersona,
            id: resp.id,
          }
        })),
        tap(({ persona }) => {
          this.router.navigate([`/${Route.persona}/${persona.id}`]);
        })
      );
    }),
  ));

  removePersona$ = createEffect(() => this.actions$.pipe(
    ofType(removePersona),
    switchMap(({ personaId }) => {
      return this.api.request<{ id: string; }>({
        endpoint: this.api.endpoint.deletePersona,
        urlParams: { id: personaId }
      });
    }),
    tap(() => this.router.navigate(['/', Route.persona]))
  ), { dispatch: false });

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(loadContacts),
    switchMap(({ personaId, offset, limit }) => this.api.request<{ contacts: ContactDto[]; count: number; }>({
      endpoint: this.api.endpoint.getContacts,
      queryParams: { limit, offset },
    }).pipe(
      map(resp => loadContactsSuccess({
        personaId,
        contacts: resp.contacts.map(contactFromDto),
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
    private store: Store<App>,
    private router: Router,
  ) { }

}
