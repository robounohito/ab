import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroupT, formCreate } from 'src/app/_core/form/form';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Route } from 'src/app/app.constants';
import { recovery, loginReset } from '../login.constants';
import { selectLogin } from '../login.model';
import { Observable } from 'rxjs';
import { Login } from '../login.types';

interface RecoveryForm {
  email: string;
}

@Component({
  selector: 'autobound-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['../login.component.scss', './recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoveryComponent implements OnInit {

  route = Route;
  form!: FormGroupT<RecoveryForm>;
  model$!: Observable<Login>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit() {
    this.form = formCreate<RecoveryForm>(this.fb, {
      email: ['', [Validators.required, Validators.email]],
    });
    this.model$ = this.store.select(selectLogin);
    this.store.dispatch(loginReset());
  }

  recovery({ email }: RecoveryForm) {
    this.store.dispatch(recovery({
      payload: { email, recoveryType: 'email' }
    }));
  }

}
