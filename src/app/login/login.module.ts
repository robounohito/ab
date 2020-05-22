import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './login.effects';
import { SharedModule } from '../_shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetComponent } from './reset/reset.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { NgxMaskModule } from 'ngx-mask';
import { StoreModule } from '@ngrx/store';
import { reducer } from './login.model';

@NgModule({
  declarations: [LoginComponent, SignupComponent, RecoveryComponent, ResetComponent, LoginTemplateComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    StoreModule.forFeature('login', reducer),
    EffectsModule.forFeature([LoginEffects]),
    NgxMaskModule.forChild(),
  ]
})
export class LoginModule { }
