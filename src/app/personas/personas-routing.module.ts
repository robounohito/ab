import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas.component';
import { PersonaContactsComponent } from './persona-contacts/persona-contacts.component';
import { PersonaGuard } from './persona-guard.service';
import { PersonasGuard } from './personas-guard.service';

const routes: Routes = [{
  path: '',
  component: PersonasComponent,
  canActivate: [PersonasGuard],
  children: [{
    path: ':personaId',
    canActivate: [PersonaGuard],
    component: PersonaContactsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
