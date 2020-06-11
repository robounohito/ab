import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas.component';
import { PersonaContactsComponent } from './personas-contacts/personas-contacts.component';

const routes: Routes = [{
  path: '',
  component: PersonasComponent,
  children: [{
    path: ':personaId',
    canActivate: [],
    component: PersonaContactsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
