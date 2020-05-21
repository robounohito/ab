import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/auth/auth-guard.service';
import { NotFoundComponent } from './_shared/not-found/not-found.component';
import { Route } from './app.constants';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule)
}, {
  path: Route.login,
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}, {
  path: '**',
  canActivate: [AuthGuard],
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
