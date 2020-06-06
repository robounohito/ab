import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import { SharedModule } from '../_shared/shared.module';


@NgModule({
  declarations: [PersonasComponent],
  imports: [
    CommonModule,
    SharedModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
