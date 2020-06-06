import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutobotRoutingModule } from './autobot-routing.module';
import { AutobotComponent } from './autobot.component';
import { SharedModule } from '../_shared/shared.module';
import { EditorComponent } from './prospect/editor/editor.component';
import { EditorDirective } from './prospect/editor/editor.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AutobotEffects } from './autobot.effects';
import { reducer } from './autobot.model';
import { ProspectComponent } from './prospect/prospect.component';
import { ChartistModule } from 'ng-chartist';
import { ChartComponent } from './prospect/chart/chart.component';
import { ProspectGuard } from './prospect-guard.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InsightsComponent } from './prospect/insights/insights.component';

@NgModule({
  declarations: [AutobotComponent, EditorComponent, EditorDirective, ProspectComponent, ChartComponent, InsightsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AutobotRoutingModule,
    StoreModule.forFeature('autobot', reducer),
    EffectsModule.forFeature([AutobotEffects]),
    ChartistModule,
    FontAwesomeModule,
  ],
  entryComponents: [
    EditorComponent,
  ],
  providers: [
    ProspectGuard
  ]
})
export class AutobotModule { }
