import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../app.types';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../app.model';
import { Personas } from './personas.types';
import { selectPersonas } from './personas.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ab-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent implements OnInit {

  model$!: Observable<Personas>;
  currentRoute$!: Observable<any>;


  array = [1, 2, 3, 4, 5];



  constructor(
    private store: Store<App>,

  ) { }

  ngOnInit() {
    this.currentRoute$ = this.store.select(selectRouteParam('personaId'));
    this.model$ = this.store.select(selectPersonas);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);
  }

}
