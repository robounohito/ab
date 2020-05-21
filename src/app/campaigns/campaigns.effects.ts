import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCampaigns, loadCampaignsSuccess } from './campaigns.constants';
import { ApiService } from '../_core/api/api.service';
import { Campaign } from './campaigns.types';

@Injectable()
export class CampaignsEffects {

  loadCampaigns$ = createEffect(() => this.actions$.pipe(
    ofType(loadCampaigns),
    switchMap(() => this.api.request<{ list: Campaign[] }>({
      endpoint: this.api.endpoint.getCampaigns,
    }).pipe(
      map(resp => loadCampaignsSuccess({ campaigns: resp.list }))
    )),
  ));

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }

}
