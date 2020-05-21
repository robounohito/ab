import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../_shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './navbar.model';
import { NavbarEffects } from './navbar.effects';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavbarRoutingModule,
    StoreModule.forFeature('navbar', reducer),
    EffectsModule.forFeature([NavbarEffects]),
  ]
})
export class NavbarModule { }
