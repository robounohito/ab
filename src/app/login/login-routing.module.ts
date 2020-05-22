import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { Route } from '../app.constants';
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetComponent } from './reset/reset.component';
import { LoginGuard } from './login-guard.service';

const routes: Routes = [{
  path: '',
  canActivate: [LoginGuard],
  component: LoginComponent,
}, {
  path: Route.signup,
  canActivate: [LoginGuard],
  component: SignupComponent
}, {
  path: Route.recovery,
  canActivate: [LoginGuard],
  component: RecoveryComponent
}, {
  path: Route.reset,
  canActivate: [LoginGuard],
  component: ResetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
