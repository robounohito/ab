import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Autobot } from './autobot.types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAutobot } from './autobot.model';
import { loadSuggestedActivities } from './autobot.constants';
import { slideInOut, columnFadeAnimation } from '../_core/animations/animations';
import { blankProfiilePic } from '../app.constants';

@Component({
  selector: 'autobound-autobot',
  templateUrl: './autobot.component.html',
  styleUrls: ['./autobot.component.scss'],
  animations: [slideInOut, columnFadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutobotComponent implements OnInit {

  blankProfiilePic = blankProfiilePic;
  model$!: Observable<Autobot>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectAutobot);
    this.store.dispatch(loadSuggestedActivities());
  }

}
