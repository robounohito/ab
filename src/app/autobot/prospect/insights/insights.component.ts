import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faEnvelope, faPhone, faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'autobound-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsightsComponent implements OnInit {

  fa = { faEnvelope, faPhone, faHandshake };
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  @Input() activities = [{
    date: '2 Apr, 2020 6:39 PM',
    from: 'Ivan Poddubchenko',
    to: 'Richard Hunter',
    caption: 'Just read article on SwiftStack\'s purchase, congrats!',
    text: 'I have a few suggestions for capitalizing on the latest funding round…',
    responses: 1,
  }, {
    date: '2 Apr, 2020 6:59 PM',
    from: 'Ivan Poddubchenko',
    to: 'Richard Hunter',
    caption: 'Just read article on SwiftStack\'s purchase, congrats!',
    text: 'I have a few suggestions for capitalizing on the latest funding round…',
    responses: 1,
  }];
  @Input() opportunities = [{
    date: '2 Apr, 2020 6:39 PM',
    closeDate: '10 May, 2020',
    owner: 'Richard Hunter',
    caption: 'Inbound from site - Microsoft, Richard Hunter',
    text: 'This is description of this opportunity. It can be a few sentences. Now it’s just text for example.',
    valuation: '$9 500',
  }, {
    date: '2 Apr, 2020 6:59 PM',
    closeDate: '11 May, 2020',
    owner: 'Richard Hunter',
    caption: 'Inbound from site - Microsoft, Richard Hunter',
    text: 'This is description of this opportunity. It can be a few sentences. Now it’s just text for example.',
    valuation: '$500',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
