
import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../_core/api/api.service';
import { EMPTY } from 'rxjs';
import { loadDashboard, loadDashboardSuccess } from './dashboard.constants';
import { Dashboard } from './dashboard.types';

@Injectable()
export class DashboardEffects {

  dashboard$ = createEffect(() => this.actions$.pipe(
    ofType(loadDashboard),
    switchMap(({ selectedOutreach }) => this.api.request<Dashboard[]>({
      endpoint: this.api.endpoint.getOutreachMetrics,
      data: selectedOutreach,
    }).pipe(
      map(res => loadDashboardSuccess({ outreachMetrics: res[0] })),
      catchError(() => EMPTY)
    )),
  ));

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }

}
