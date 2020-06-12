import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard.types';
import { Store } from '@ngrx/store';
import { selectDashboard } from './dashboard.model';
import { faEnvelopeOpen, faReply, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { loadDashboard, Outreach } from './dashboard.constants';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  fa = { faEnvelopeOpen, faReply, faEnvelope };
  outreach = Outreach;
  model$!: Observable<Dashboard>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectDashboard);
    this.store.dispatch(loadDashboard({ selectedOutreach: Outreach.all }));
  }

  selectionChange(change: MatSelectChange) {
    this.store.dispatch(loadDashboard({ selectedOutreach: change.value }));
  }

}
