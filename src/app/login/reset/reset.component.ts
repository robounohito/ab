import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroupT, formCreate } from 'src/app/_core/form/form';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Route } from 'src/app/app.constants';
import { reset, loginReset } from '../login.constants';
import { Observable } from 'rxjs';
import { Login } from '../login.types';
import { selectLogin } from '../login.model';

interface ResetForm {
  email: string;
  code: string;
  password: string;
}

@Component({
  selector: 'autobound-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['../login.component.scss', './reset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetComponent implements OnInit {

  route = Route;
  form!: FormGroupT<ResetForm>;
  model$!: Observable<Login>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit() {
    this.form = formCreate<ResetForm>(this.fb, {
      email: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
    this.model$ = this.store.select(selectLogin);
    this.store.dispatch(loginReset());
  }

  reset({ email, code, password }: ResetForm) {
    this.store.dispatch(reset({
      payload: { email, recoveryCode: code, password }
    }));
  }

}
