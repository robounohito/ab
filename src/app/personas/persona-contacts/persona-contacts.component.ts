import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { selectCurrentPersona } from '../personas.model';
import { Observable } from 'rxjs';
import { Persona } from '../personas.types';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'ab-contacts',
  templateUrl: './persona-contacts.component.html',
  styleUrls: ['./persona-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaContactsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  displayedColumns = ['name', 'title'];

  model$!: Observable<Persona | undefined>;

  applyFilter = (_: any) => { };

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectCurrentPersona);
  }

}
