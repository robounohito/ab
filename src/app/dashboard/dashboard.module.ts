import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './dashboard.model';
import { DashboardEffects } from './dashboard.effects';
import { SharedModule } from '../_shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducer),
    EffectsModule.forFeature([DashboardEffects]),
    FontAwesomeModule,
  ]
})
export class DashboardModule { }
