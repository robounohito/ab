import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Validators, FormBuilder } from '@angular/forms';
import { Route } from 'src/app/app.constants';
import { Store } from '@ngrx/store';
import { signup, loginReset } from '../login.constants';
import { Login } from '../login.types';
import { Observable } from 'rxjs';
import { selectLogin } from '../login.model';

interface SignupForm {
  email: string;
  phone: string;
  password: string;
}

@Component({
  selector: 'autobound-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login.component.scss', './signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  route = Route;
  form!: FormGroupT<SignupForm>;
  model$!: Observable<Login>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit() {
    this.form = formCreate<SignupForm>(this.fb, {
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
    this.model$ = this.store.select(selectLogin);
    this.store.dispatch(loginReset());
  }

  signup({ email, phone, password }: SignupForm) {
    this.store.dispatch(signup({
      payload: { email, phone, password }
    }));
  }

}
