import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { materialImports } from './material-imports';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArrowComponent } from './arrow/arrow.component';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { ENTER, TAB } from '@angular/cdk/keycodes';

@NgModule({
  declarations: [
    NotFoundComponent,
    ArrowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...materialImports
  ],
  exports: [
    ReactiveFormsModule,
    ArrowComponent,
    ...materialImports
  ],
  providers: [
    { provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: { separatorKeyCodes: [ENTER, TAB] } },
  ]
})
export class SharedModule { }
