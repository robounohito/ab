import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from './mocks/mock.interceptor';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HttpErrorInterceptor } from './errors/http-error.interceptor';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    ApiService
  ]
})
export class CoreModule { }
