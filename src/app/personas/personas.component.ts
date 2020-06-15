import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../app.types';
import { Store } from '@ngrx/store';
import { Personas, Persona } from './personas.types';
import { selectPersonas } from './personas.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { reorderPersonas } from './personas.constants';

@Component({
  selector: 'ab-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent implements OnInit {

  model$!: Observable<Personas>;

  constructor(
    private store: Store<App>,

  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectPersonas);
  }

  drop(event: CdkDragDrop<string[]>, personas: Persona[]) {
    const moved = [...personas];
    moveItemInArray(moved, event.previousIndex, event.currentIndex);
    this.store.dispatch(reorderPersonas({
      original: personas,
      moved: moved.map((persona, i) => ({ ...persona, order: i + 1 })),
    }));
  }

  addPersona() { }

  trackByFn(index: number, item: Persona) {
    return item.id || index;
  }

}
