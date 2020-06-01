import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'autobound-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
