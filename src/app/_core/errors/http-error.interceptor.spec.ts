import { HttpErrorInterceptor } from './http-error.interceptor';
import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpErrorResponse, HttpHandler, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs/';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import SpyObj = jasmine.SpyObj;
import { navigateToLogin, notification } from 'src/app/app.constants';
import { Store } from '@ngrx/store';

describe('HttpErrorInterceptor', () => {

  let interceptor: HttpErrorInterceptor;
  let httpHandlerSpy: SpyObj<HttpHandler>;
  let store: MockStore;

  beforeEach(() => {
    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    TestBed.configureTestingModule({
      providers: [
        HttpErrorInterceptor,
        provideMockStore({ initialState: {} }),
      ]
    });
    interceptor = TestBed.inject(HttpErrorInterceptor);
    store = TestBed.inject(Store) as MockStore;
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
    });

    it('should emit complete', () => {
      httpHandlerSpy.handle.and.returnValue(of('whatever')
        .pipe(switchMap(() => throwError({ error: { message: 'whatever' } }))));
      interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy)
        .pipe(take(1))
        .subscribe({
          complete: () => {
            expect().nothing();
          }
        });
    });

    it('should redirect on 401', () => {
      const dispatchSpy = spyOn(store, 'dispatch');
      httpHandlerSpy.handle.and.returnValue(of('whatever')
        .pipe(switchMap(() => throwError({
          url: 'whatever',
          status: 401,
        }))));
      interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy)
        .pipe(
          take(1)
        ).subscribe({
          error: () => {
            expect(dispatchSpy)
              .toHaveBeenCalledWith(navigateToLogin());
          }
        });
    });

    it('should throw with bypassHttpErrorInterceptor flag', (done) => {
      const error = {
        url: '/',
        status: 500,
        error: { message: 'whatever', code: 1001 }
      };
      httpHandlerSpy.handle.and.returnValue(of('whatever')
        .pipe(switchMap(() => throwError(error))));
      interceptor.intercept(new HttpRequest('GET', '/', {
        params: new HttpParams().set('bypassHttpErrorInterceptor', '1001')
      }), httpHandlerSpy).pipe(
        take(1)
      ).subscribe({
        error: (res) => {
          expect(res).toEqual(error);
          done();
        },
      });
    });

    it('should invoke global errorHandler', () => {
      const dispatchSpy = spyOn(store, 'dispatch');
      httpHandlerSpy.handle.and.returnValue(of('whatever')
        .pipe(switchMap(() => throwError({
          url: 'whatever',
          status: 500,
          error: { message: 'whatever', code: 1001 }
        }))));
      interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy)
        .pipe(
          take(1)
        ).subscribe({
          complete: () => {
            expect(dispatchSpy)
              .toHaveBeenCalledWith(notification({
                message: 'whatever',
                action: 'Dismiss',
                config: { panelClass: ['red-snackbar'] }
              }));
          }
        });
    });

  });

  describe('errorHandler', () => {

    beforeEach(() => {
      // tslint:disable-next-line:no-console
      spyOn(console, 'error').and.callFake(console.info);
    });

    it('should call console.error on back end error', () => {
      const error = { message: 'whatever', code: 1001 };
      spyOn(window.console, 'info');
      interceptor.errorHandler({ status: 500, error } as HttpErrorResponse);
      expect(window.console.error).toHaveBeenCalledWith(
        'Backend returned code 500, body was:',
        error
      );
    });

    it('should call console.error on client side error', () => {
      const error = new Error('whatever');
      spyOn(window.console, 'info');
      interceptor.errorHandler({ error } as HttpErrorResponse);
      expect(window.console.error).toHaveBeenCalledWith(
        'An error occurred:',
        'whatever'
      );
    });

    it('should dispatch notification ', () => {
      const error = new Error('whatever');
      const dispatchSpy = spyOn(store, 'dispatch');
      interceptor.errorHandler({ error } as HttpErrorResponse);
      expect(dispatchSpy)
        .toHaveBeenCalledWith(notification({
          message: 'whatever',
          action: 'Dismiss',
          config: { panelClass: ['red-snackbar'] }
        }));
    });

  });

});
