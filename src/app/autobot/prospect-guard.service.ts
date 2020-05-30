import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../app.model';
import { App } from '../app.types';
import { loadProspect } from './autobot.constants';

@Injectable()
export class ProspectGuard implements CanActivate {

  constructor(
    private store: Store<App>,
  ) { }

  canActivate() {
    return this.store.select(selectRouteParam('prospectId')).pipe(
      take(1),
      tap(prospectId => {
        return prospectId && this.store.dispatch(loadProspect({ prospectId }));
      }),
      map(() => true),
    );
  }

}
