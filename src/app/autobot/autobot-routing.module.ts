import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutobotComponent } from './autobot.component';

const routes: Routes = [{
  path: '',
  component: AutobotComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutobotRoutingModule { }
