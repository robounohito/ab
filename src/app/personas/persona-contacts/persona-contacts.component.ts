import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { selectCurrentPersona } from '../personas.model';
import { Observable } from 'rxjs';
import { Persona, Contact } from '../personas.types';
import { PageEvent } from '@angular/material/paginator';
import { loadContacts, contactsTableColumns, searchContacts } from '../personas.constants';
import { Sort } from '@angular/material/sort';
import { ApiService } from 'src/app/_core/api/api.service';
import { formCreate, FormGroupT } from 'src/app/_core/form/form';
import { FormBuilder } from '@angular/forms';

interface PersonaContactsForm {
  displayedColumns: string[];
}

@Component({
  selector: 'ab-contacts',
  templateUrl: './persona-contacts.component.html',
  styleUrls: ['./persona-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaContactsComponent implements OnInit {

  contactsTableColumns: { [key: string]: string } = contactsTableColumns;
  allColumns = Object.keys(contactsTableColumns);
  model$!: Observable<Persona | undefined>;
  form!: FormGroupT<PersonaContactsForm>;

  constructor(
    private store: Store<App>,
    public api: ApiService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectCurrentPersona);
    this.form = formCreate<PersonaContactsForm>(this.fb, {
      displayedColumns: [['fullName', 'jobTitle', 'email', 'phone', 'company', 'industry', 'technologies']],
    });
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

  searchContacts(searchTerm: string, personaId: string) {
    this.store.dispatch(searchContacts({
      personaId,
      searchTerm
    }));
  }

  userInitials(fullName: string) {
    return fullName.split(' ').map(n => n.charAt(0).toUpperCase()).join('');
  }

  trackByFn(index: number, item: Contact) {
    return item.id || index;
  }

}
