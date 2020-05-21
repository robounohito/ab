import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../app.types';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../app.model';

@Component({
  selector: 'autobound-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent implements OnInit {

  currentRoute$!: Observable<any>;

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit() {
    this.currentRoute$ = this.store.select(selectRouteParam('personaId'));
  }

}
