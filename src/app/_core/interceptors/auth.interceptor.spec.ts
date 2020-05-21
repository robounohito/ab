import { TestBed } from '@angular/core/testing';
import { ApiService } from '../api/api.service';
import { AuthInterceptor } from './auth.interceptor';
import { HttpRequest, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthInterceptor', () => {

  let interceptor: AuthInterceptor;

  beforeEach(() => {

    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['request']);
    apiServiceSpy.endpoint = {
      getCurrentUser: { url: 'current-user' },
      getGeos: { url: 'geos' }
    };
    apiServiceSpy.baseUrl = '/';

    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    });

    interceptor = TestBed.inject(AuthInterceptor);

  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should set x-locale header from currentUser', (done: DoneFn) => {

    const httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpHandlerSpy.handle.and.callFake((updatedRequest: Object) => {
      return of(updatedRequest);
    });

    const req = new HttpRequest('GET', '/', {}, {
      headers: new HttpHeaders({ 'x-locale': 'uk-UA' })
    });
    req['params' as any] = { has: () => true, get: () => 1 };

    interceptor.intercept(req, httpHandlerSpy)
      .subscribe((res: any) => {
        expect(res.headers.get('x-locale')).toEqual('en-US');
        expect(res.url).toEqual('absoluteUrl/');
        expect(res.withCredentials).toEqual(true);
        done();
      });

  });

});
