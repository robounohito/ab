import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from '../app.types';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../app.model';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Personas } from './personas.types';
import { selectPersonas } from './personas.model';
import { loadProspects } from './personas.constants';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'autobound-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent implements OnInit {

  model$!: Observable<Personas>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  currentRoute$!: Observable<any>;
  applyFilter: any;
  displayedColumns = ['name', 'title'];

  toppingsControl = new FormControl(['Extra cheese']);
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit() {
    this.currentRoute$ = this.store.select(selectRouteParam('personaId'));
    this.model$ = this.store.select(selectPersonas);
    this.store.dispatch(loadProspects({ page: Object.freeze(this.paginator.page) }));
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
