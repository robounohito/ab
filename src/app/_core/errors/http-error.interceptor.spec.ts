import { HttpErrorInterceptor } from './http-error.interceptor';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs/';
import { provideMockStore } from '@ngrx/store/testing';

describe('HttpErrorInterceptor', () => {

  let interceptor: HttpErrorInterceptor;
  let httpHandlerSpy: any;

  beforeEach(() => {

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue('whatever');

    TestBed.configureTestingModule({
      providers: [
        HttpErrorInterceptor,
        { provide: Router, useValue: routerSpy },
        provideMockStore({ initialState: {} }),
      ]
    });

    interceptor = TestBed.inject(HttpErrorInterceptor);

  });

  describe('instance', () => {

    it('should be created', () => {
      expect(interceptor).toBeTruthy();
    });

  });

  describe('intercept', () => {

    beforeEach(() => {
      // tslint:disable-next-line:no-console
      spyOn(console, 'error').and.callFake(console.info);
      httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
      httpHandlerSpy.handle.and.returnValue(of('whatever')
        .pipe(switchMap(() => throwError({ error: { message: 'whatever' } }))));
    });

    it('should emit complete', (done: DoneFn) => {
      interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy)
        .pipe(take(1))
        .subscribe({
          complete: () => {
            expect().nothing();
            done();
          }
        });
    });

    it('should emit redirect', () => {

      const router = TestBed.inject(Router);

      httpHandlerSpy.handle.and.returnValue(of('whatever')
        .pipe(switchMap(() => throwError({
          url: 'whatever',
          error: {
            code: 1001,
            message: 'whatever',
          }
        }))));

      interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy)
        .pipe(
          take(1)
        ).subscribe({
          error: () => {
            expect(router.navigate).toHaveBeenCalled();
          }
        });

    });

  });

  describe('errorHandler', () => {

    it('should call console.error', () => {
      spyOn(window.console, 'error');
      interceptor.errorHandler({ error: { message: 'whatever' } } as HttpErrorResponse);
      expect(window.console.error).toHaveBeenCalled();
    });

  });

});
