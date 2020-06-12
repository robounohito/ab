import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
