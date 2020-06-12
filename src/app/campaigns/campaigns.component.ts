import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCampaigns } from './campaigns.constants';
import { Campaigns } from './campaigns.types';
import { selectCampaings } from './campaigns.model';
import { App } from '../app.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignsComponent implements OnInit {

model$!: Observable<Campaigns>;

  constructor(
    private store: Store<App>,
  ) { }

  ngOnInit() {
    this.store.dispatch(loadCampaigns());
    this.model$ = this.store.select(selectCampaings);
  }

}
