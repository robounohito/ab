
import { createAction, props } from '@ngrx/store';
import { Prospect } from '../app.types';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

export const loadProspects = createAction(
  '[Personas] Load Prospects',
  props<{ page: Observable<PageEvent>; }>()
);

export const loadProspectsSuccess = createAction(
  '[Personas] Load Prospects Success',
  props<{ prospects: Prospect[]; }>()
);
