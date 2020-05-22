import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, loginReset } from './login.constants';
import { FormGroupT, formCreate } from '../_core/form/form';
import { Route } from '../app.constants';
import { Login } from './login.types';
import { Observable } from 'rxjs';
import { selectLogin } from './login.model';

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
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
  model$!: Observable<Login>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit() {
    this.form = formCreate<LoginForm>(this.fb, {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      rememberMe: [false],
    });
    this.model$ = this.store.select(selectLogin);
    this.store.dispatch(loginReset());
  }

  login(formValue: LoginForm) {
    this.store.dispatch(login({ payload: formValue }));
  }

}
