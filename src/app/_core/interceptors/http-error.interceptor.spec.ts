import { HttpErrorInterceptor, textErrorGenerator } from './http-error.interceptor';
import { TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs/';

describe('HttpErrorInterceptor', () => {

  let interceptor: HttpErrorInterceptor;
  let httpHandlerSpy: any;

  beforeEach(() => {

    const bsModalServiceSpy = jasmine.createSpyObj('BsModalService', ['show']);
    bsModalServiceSpy.show.and.returnValue('whatever');

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue('whatever');

    TestBed.configureTestingModule({
      providers: [
        HttpErrorInterceptor,
        { provide: BsModalService, useValue: bsModalServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    interceptor = TestBed.get(HttpErrorInterceptor);

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

      const router = TestBed.get(Router);

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

    it('should emit redirect to maintenance', () => {

      const router = TestBed.get(Router);

      httpHandlerSpy.handle.and.returnValue(of('whatever')
        .pipe(switchMap(() => throwError({ status: 0 }))));

      interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy)
        .pipe(
          take(1)
        ).subscribe({
          error: (err) => {
            expect(router.navigate).toHaveBeenCalled();
            expect(err.status).toEqual(0);
          }
        });

    });

  });

  describe('textErrorGenerator', () => {

    it('should cut an error on a regexp', () => {
      const result = textErrorGenerator({
        error: { message: 'whatever | should not be displayed' }
      } as HttpErrorResponse);
      expect(result).toEqual('whatever ');
    });

    it('should return web.modals.error.errorOccurred', () => {
      const result = textErrorGenerator({
        status: 500,
        error: {
          message: 'whatever | should not be displayed'
        }
      } as HttpErrorResponse);
      expect(result).toEqual('web.modals.error.errorOccurred');
    });

    it('should return message by default', () => {
      const result = textErrorGenerator({
        error: {
          message: ''
        }
      } as HttpErrorResponse);
      expect(result)
        .toEqual('10017: Something went wrong. Please refresh the page and try again.');
    });

  });

  describe('errorHandler', () => {

    it('should call console.error', () => {
      spyOn(window.console, 'error');
      interceptor.errorHandler({ error: { message: 'whatever' } } as HttpErrorResponse);
      expect(window.console.error).toHaveBeenCalled();
    });

  });


  describe('shouldRedirect', () => {

    it('should return true', () => {
      const result = interceptor.shouldRedirect({
        url: 'whatever',
        error: {
          code: 1001,
          message: 'whatever'
        }
      } as HttpErrorResponse);
      expect(result).toEqual(result);
    });

  });

  describe('shouldRedirectByBodyErrorCode', () => {

    it('should return true', () => {
      const result = interceptor.shouldRedirect({
        url: 'whatever',
        error: {
          code: 1001,
          message: 'whatever'
        }
      } as HttpErrorResponse);
      expect(result).toEqual(result);
    });

  });

  describe('shouldRedirectByErrorHttpStatus', () => {

    it('should return true', () => {
      const result = interceptor.shouldRedirect({
        url: 'whatever',
        status: 404,
        error: {
          code: 1001,
          message: 'whatever'
        }
      } as HttpErrorResponse);
      expect(result).toEqual(result);
    });

  });

  describe('hasSkipUrl', () => {

    it('should return true', () => {
      const result = interceptor.hasSkipUrl('api/Engagements');
      expect(result).toEqual(result);
    });

  });

  describe('getRedirectState', () => {

    it('should redirect to engagement/info', () => {
      const result = interceptor.getRedirectState('engagement/assignment/whatever', 'whatever/AssignmentHeader');
      expect(result).toEqual('engagement/info');
    });

    it('should redirect to selection/selectionType', () => {
      const result = interceptor.getRedirectState('selections/floor-to-sheet/whatever', 'whatever');
      expect(result).toEqual('selections/floor-to-sheet');
    });

    it('should redirect to assignment/', () => {
      const result = interceptor.getRedirectState('assignment/selections/floor-to-sheet', 'whatever');
      expect(result).toEqual('assignment/');
    });

    it('should redirect to assignment/info', () => {
      const result = interceptor.getRedirectState('engagement/assignment/whatever', 'whatever');
      expect(result).toEqual('engagement/assignment/info');
    });

    it('should redirect to /', () => {
      const result = interceptor.getRedirectState('engagement/info', 'whatever');
      expect(result).toEqual('/');
    });

  });

  describe('isSelectionsLevel', () => {

    it('should return true', () => {
      expect(interceptor.isSelectionsLevel('whatever/selections')).toEqual(true);
    });

  });

  describe('isSelectionsDetails', () => {

    it('should return true', () => {
      expect(interceptor.isSelectionsDetails('selections/floor-to-sheet/whatever')).toEqual(true);
    });

  });

  describe('selectionListUrl', () => {

    it('should return url to selection list', () => {
      expect(interceptor.selectionListUrl('assignment/selections/floor-to-sheet/whatever')).toEqual('assignment/selections/floor-to-sheet');
    });

  });

  describe('isAssignmentLevel', () => {

    it('should return true', () => {
      expect(interceptor.isAssignmentLevel('assignment')).toEqual(true);
    });

  });

  describe('isEngagementLevel', () => {

    it('should return true', () => {
      expect(interceptor.isEngagementLevel('engagement/info')).toEqual(true);
    });

  });

});
