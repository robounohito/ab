import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'autobound-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}