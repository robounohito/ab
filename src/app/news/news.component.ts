import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
