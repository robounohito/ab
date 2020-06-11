import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../app.types';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../app.model';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Personas } from './personas.types';
import { selectPersonas } from './personas.model';

@Component({
  selector: 'autobound-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent implements OnInit {

  model$!: Observable<Personas>;
  currentRoute$!: Observable<any>;

  toppingsControl = new FormControl(['Extra cheese']);
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit() {
    this.currentRoute$ = this.store.select(selectRouteParam('personaId'));
    this.model$ = this.store.select(selectPersonas);
  }

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.toppingList.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  truncate(arr: string[]) {
    return [...arr, 'whatever'];
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
