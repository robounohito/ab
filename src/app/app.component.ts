import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUrl, selectRouteParam } from './app.model';
import { App } from './app.types';
import { readToken } from './app.constants';

@Component({
  selector: 'autobound-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  title = 'autobound-next';
  currentRoute$!: Observable<any>;
  currentUrl$!: Observable<string>;

  constructor(private store: Store<App>) { }

  ngOnInit() {
    this.store.dispatch(readToken());
    this.currentRoute$ = this.store.select(selectRouteParam('testId'));
    this.currentUrl$ = this.store.select(selectUrl);
  }

}
