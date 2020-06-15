import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { selectCurrentPersona } from '../personas.model';
import { Observable } from 'rxjs';
import { Persona } from '../personas.types';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { loadContacts } from '../personas.constants';

@Component({
  selector: 'ab-contacts',
  templateUrl: './persona-contacts.component.html',
  styleUrls: ['./persona-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaContactsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  displayedColumns = ['firstName', 'lastName', 'email'];

  model$!: Observable<Persona | undefined>;

  applyFilter = (_: any) => { };

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectCurrentPersona);
  }

  pageChange(event: PageEvent, personaId: string) {
    this.store.dispatch(loadContacts({
      personaId,
      offset: (event.pageIndex * event.pageSize),
      limit: event.pageSize
    }));
  }

}
