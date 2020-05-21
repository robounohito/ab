import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'autobound-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginTemplateComponent {

  getCurrentYear() {
    return new Date().getFullYear();
  }

}
