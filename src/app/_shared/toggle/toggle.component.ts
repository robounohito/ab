import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroupDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'ab-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  @Input() value!: boolean;
  @Input() inputFormControlName!: string;
  @Output() toggle = new EventEmitter<boolean>();
}
