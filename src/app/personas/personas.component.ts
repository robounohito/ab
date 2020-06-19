import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../app.types';
import { Store } from '@ngrx/store';
import { Personas, Persona } from './personas.types';
import { selectPersonas, selectCurrentPersona } from './personas.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { reorderPersonas, personaCreate } from './personas.constants';
import { customFadeAnimation } from '../_core/animations/animations';

@Component({
  selector: 'ab-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  animations: [customFadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent implements OnInit {

  model$!: Observable<Personas>;
  selectedPersona$!: Observable<Persona | undefined>;

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectPersonas);
    this.selectedPersona$ = this.store.select(selectCurrentPersona);
  }

  drop(event: CdkDragDrop<string[]>, personas: Persona[]) {
    const moved = [...personas];
    moveItemInArray(moved, event.previousIndex, event.currentIndex);
    this.store.dispatch(reorderPersonas({
      original: personas,
      moved: moved.map((persona, i) => ({ ...persona, order: i + 1 })),
    }));
  }

  addPersona(order: number) {
    this.store.dispatch(personaCreate({ order: order + 1 }));
  }

  trackByFn(index: number, item: { key: string }) {
    return item.key || index;
  }

}
