
import { createAction, props } from '@ngrx/store';
import { Prospect } from '../app.types';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Persona } from './personas.types';

export const loadPersonas = createAction(
  '[Personas] Load Personas',
);

export const loadPersonasSuccess = createAction(
  '[Personas] Load Personas Success',
  props<{ personas: Persona[]; }>()
);

export const reorderPersonas = createAction(
  '[Personas] Reorder Personas',
  props<{ original: Persona[]; moved: Persona[]; }>()
);

export const loadProspects = createAction(
  '[Personas] Load Prospects',
  props<{ page: Observable<PageEvent>; }>()
);

export const loadProspectsSuccess = createAction(
  '[Personas] Load Prospects Success',
  props<{ prospects: Prospect[]; }>()
);

export enum Condition {
  contains,
  doesNotContain,
  isKnown,
  isUnknown,
}
