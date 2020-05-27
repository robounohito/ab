import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutobotRoutingModule } from './autobot-routing.module';
import { AutobotComponent } from './autobot.component';
import { SharedModule } from '../_shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { EditorDirective } from './editor/editor.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AutobotEffects } from './autobot.effects';
import { reducer } from './autobot.model';

@NgModule({
  declarations: [AutobotComponent, EditorComponent, EditorDirective],
  imports: [
    CommonModule,
    SharedModule,
    AutobotRoutingModule,
    StoreModule.forFeature('autobot', reducer),
    EffectsModule.forFeature([AutobotEffects]),
  ]
})
export class AutobotModule { }
