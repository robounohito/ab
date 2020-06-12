import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { App } from './app.types';
import { readToken } from './app.constants';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(private store: Store<App>) { }

  ngOnInit() {
    this.store.dispatch(readToken());
  }

}
