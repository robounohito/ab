import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'autobound-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
