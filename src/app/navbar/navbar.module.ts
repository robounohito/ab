import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    NavbarRoutingModule,
  ]
})
export class NavbarModule { }
