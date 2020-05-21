import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutobotRoutingModule } from './autobot-routing.module';
import { AutobotComponent } from './autobot.component';
import { SharedModule } from '../_shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { EditorDirective } from './editor/editor.directive';

@NgModule({
  declarations: [AutobotComponent, EditorComponent, EditorDirective],
  imports: [
    CommonModule,
    SharedModule,
    AutobotRoutingModule,
  ]
})
export class AutobotModule { }
