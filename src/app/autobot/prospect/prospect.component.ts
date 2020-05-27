import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectRouteParam } from 'src/app/app.model';
import { App } from 'src/app/app.types';

@Component({
  selector: 'autobound-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProspectComponent implements OnInit {

  currentRoute$!: Observable<any>;

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit(): void {
    this.currentRoute$ = this.store.select(selectRouteParam('prospectId'));
  }

}
