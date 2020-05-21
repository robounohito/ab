import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriggersRoutingModule } from './triggers-routing.module';
import { TriggersComponent } from './triggers.component';


@NgModule({
  declarations: [TriggersComponent],
  imports: [
    CommonModule,
    TriggersRoutingModule
  ]
})
export class TriggersModule { }
