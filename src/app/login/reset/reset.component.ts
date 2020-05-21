import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroupT, formCreate } from 'src/app/_core/form/form';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Route } from 'src/app/app.constants';
import { reset } from '../login.constants';

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
  }

  reset({ email, code, password }: ResetForm) {
    this.store.dispatch(reset({
      payload: { email, recoveryCode: code, password }
    }));
  }

}
