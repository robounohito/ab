import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import { SharedModule } from '../_shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './personas.model';
import { PersonasEffects } from './personas.effects';
import { TagsTruncateDirective } from './tags-truncate/tags-truncate.directive';
import { PersonaContactsComponent } from './personas-contacts/personas-contacts.component';

@NgModule({
  declarations: [
    PersonasComponent,
    TagsTruncateDirective,
    PersonaContactsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonasRoutingModule,
    StoreModule.forFeature('personas', reducer),
    EffectsModule.forFeature([PersonasEffects]),
  ]
})
export class PersonasModule { }
