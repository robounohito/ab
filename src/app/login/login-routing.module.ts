import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { Route } from '../app.constants';
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
}, {
  path: Route.signup,
  component: SignupComponent
}, {
  path: Route.recovery,
  component: RecoveryComponent
}, {
  path: Route.reset,
  component: ResetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
