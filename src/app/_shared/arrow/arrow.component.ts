import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ab-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowComponent {

  @Input() expanded = false;
  @Input() style: '' | 'left' | 'filled' = '';
  @Output() toggle = new EventEmitter();

  click(event: Event) {
    event.stopPropagation();
    this.toggle.emit();
  }

}
