import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsComponent } from './campaigns.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './campaigns.model';
import { CampaignsEffects } from './campaigns.effects';
import { SharedModule } from '../_shared/shared.module';
import { CampaignsTableComponent } from './campaigns-table/campaigns-table.component';

@NgModule({
  declarations: [
    CampaignsComponent,
    CampaignsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CampaignsRoutingModule,
    StoreModule.forFeature('campaigns', reducer),
    EffectsModule.forFeature([CampaignsEffects]),
  ]
})
export class CampaignsModule { }
