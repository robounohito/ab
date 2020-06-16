import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { selectCurrentPersona } from '../personas.model';
import { Observable } from 'rxjs';
import { Persona, Contact } from '../personas.types';
import { PageEvent } from '@angular/material/paginator';
import { loadContacts } from '../personas.constants';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'ab-contacts',
  templateUrl: './persona-contacts.component.html',
  styleUrls: ['./persona-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaContactsComponent implements OnInit {

  displayedColumns = ['fullName', 'jobTitle', 'lastActivityDate', 'email', 'phone', 'company', 'industry', 'companyLocation', 'technologies', 'contactLocation', 'fundingStage', 'numberOfEmployees'];

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

  sortContacts(sort: Sort) {
    console.log('sort', sort);
  }

  trackByFn(index: number, item: Contact) {
    return item.id || index;
  }

}
