import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
