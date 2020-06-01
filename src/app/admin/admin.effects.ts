import { Injectable } from '@angular/core';
// import { switchMap, map, catchError } from 'rxjs/operators';
// import { Actions, /* createEffect, ofType */ } from '@ngrx/effects';
// import { ApiService } from '../_core/api/api.service';
// import { EMPTY } from 'rxjs';

@Injectable()
export class AdminEffects {

  /* suggested$ = createEffect(() => this.actions$.pipe(
    ofType(),
    switchMap(() => this.api.request<{ campaigns: { campaignsSuggested: SuggestedActivity[]; } }>({
      endpoint: this.api.endpoint.getSuggestedCampaigns,
    }).pipe(
      map(({ campaigns }) => loadSuggestedSuccess({ suggested: campaigns.campaignsSuggested })),
      catchError(() => EMPTY)
    )),
  )); */

  constructor(
    /* private actions$: Actions,
    private api: ApiService, */
  ) { }

}
