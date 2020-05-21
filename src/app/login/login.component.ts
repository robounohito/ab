import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from './login.constants';
import { FormGroupT, formCreate } from '../_core/form/form';
import { Route } from '../app.constants';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'autobound-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  route = Route;
  form!: FormGroupT<LoginForm>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit() {
    this.form = formCreate<LoginForm>(this.fb, {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  login({ email, password }: LoginForm) {
    this.store.dispatch(login({
      payload: { email, password }
    }));
  }

}
