import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../app.types';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../app.model';
import { Personas } from './personas.types';
import { selectPersonas } from './personas.model';

@Component({
  selector: 'ab-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent implements OnInit {

  model$!: Observable<Personas>;
  currentRoute$!: Observable<any>;






  constructor(
    private store: Store<App>,

  ) { }

  ngOnInit() {
    this.currentRoute$ = this.store.select(selectRouteParam('personaId'));
    this.model$ = this.store.select(selectPersonas);
  }

  drop() { }

}
