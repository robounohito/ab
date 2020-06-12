import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { materialImports } from './material-imports';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArrowComponent } from './arrow/arrow.component';

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
  ]
})
export class SharedModule { }
