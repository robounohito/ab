import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import { SharedModule } from '../_shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './personas.model';
import { PersonasEffects } from './personas.effects';
import { TagsTruncateDirective } from './persona/tags-truncate/tags-truncate.directive';
import { PersonaContactsComponent } from './persona-contacts/persona-contacts.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaGuard } from './persona-guard.service';
import { PersonasGuard } from './personas-guard.service';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    PersonasComponent,
    TagsTruncateDirective,
    PersonaContactsComponent,
    PersonaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonasRoutingModule,
    StoreModule.forFeature('personas', reducer),
    EffectsModule.forFeature([PersonasEffects]),
    NgxMaskModule.forChild(),
  ],
  providers: [
    PersonaGuard,
    PersonasGuard,
  ]
})
export class PersonasModule { }
