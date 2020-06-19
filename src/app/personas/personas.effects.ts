
import { Injectable } from '@angular/core';
import { switchMap, map, tap, shareReplay, concatMap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import { loadContacts, loadContactsSuccess, loadPersonas, loadPersonasSuccess, reorderPersonas, personaSelectionChange } from './personas.constants';
import { ContactDto, SelectOptions, PersonaDto } from './personas.types';
import { contactMapper, numberOfEmployeesMapper, personaFromDtoMapper, selectCurrentPersona, personaToDtoMapper } from './personas.model';
import { memoizeWith, identity,  } from 'ramda';
import { forkJoin, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { App } from '../app.types';

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
        personas: personasResp.personas.map(personaFromDtoMapper),
        dataSets: {
          fundingStage,
          seniority,
          jobDepartment,
          numberOfEmployees: numberOfEmployees.map(numberOfEmployeesMapper),
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

  updatePersona$ = createEffect(() => this.actions$.pipe(
    ofType(personaSelectionChange),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectCurrentPersona)))
    )),

    switchMap(([{ personaId, path }, persona]) => {
      console.log('effect persona', persona);
      // const dtoPath = (path as any)([pathTo[0]], persona)['jobDepartmentDtoPath'];
      return this.api.request({
        endpoint: this.api.endpoint.patchPersonas,
        urlParams: { id: personaId },
        data: persona ? personaToDtoMapper(persona, path[0]) : {},
      });
    })
  ), { dispatch: false });

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(loadContacts),
    switchMap(({ personaId, offset, limit }) => this.api.request<{ contacts: ContactDto[]; count: number; }>({
      endpoint: this.api.endpoint.getContacts,
      queryParams: { limit, offset },
    }).pipe(
      map(resp => loadContactsSuccess({
        personaId,
        contacts: resp.contacts.map(contactMapper),
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
  ) { }

}
