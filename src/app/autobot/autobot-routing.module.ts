import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutobotComponent } from './autobot.component';
import { ProspectComponent } from './prospect/prospect.component';
import { ProspectGuard } from './prospect-guard.service';

const routes: Routes = [{
  path: '',
  component: AutobotComponent,
  children: [{
    path: ':prospectId',
    canActivate: [ProspectGuard],
    component: ProspectComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutobotRoutingModule { }
