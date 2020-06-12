import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { selectPersonas } from '../personas.model';
import { Observable } from 'rxjs';
import { Personas } from '../personas.types';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { loadProspects } from '../personas.constants';

@Component({
  selector: 'ab-contacts',
  templateUrl: './persona-contacts.component.html',
  styleUrls: ['./persona-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaContactsComponent implements OnInit {

  applyFilter: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  displayedColumns = ['name', 'title'];
  model$!: Observable<Personas>;

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectPersonas);
    this.store.dispatch(loadProspects({ page: Object.freeze(this.paginator.page) }));
  }

}
