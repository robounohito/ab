import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import SpyObj = jasmine.SpyObj;
import { HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

describe('AuthInterceptor', () => {

  let interceptor: AuthInterceptor;
  let httpHandlerSpy: SpyObj<HttpHandler>;
  let store: MockStore;

  beforeEach(() => {
    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        provideMockStore({
          initialState: {}
        }),
      ]
    });
    interceptor = TestBed.inject(AuthInterceptor);
    store = TestBed.inject(Store) as MockStore;
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add auth header when there is authToken', () => {
    store.setState({ shared: { currentUser: { authToken: 'authToken' } } });
    httpHandlerSpy.handle.and.callFake(req => of(new HttpResponse(req)));
    interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy).pipe(
      take(1),
    ).subscribe(res => {
      const authHeader = (res as HttpResponse<any>).headers.get('auth');
      expect(authHeader).toEqual('authToken');
    });
  });

  it('should not add auth header when there is no authToken', () => {
    store.setState({ shared: { currentUser: { authToken: null } } });
    httpHandlerSpy.handle.and.callFake(req => of(new HttpResponse(req)));
    interceptor.intercept(new HttpRequest('GET', '/'), httpHandlerSpy).pipe(
      take(1),
    ).subscribe(res => {
      const authHeader = (res as HttpResponse<any>).headers.get('auth');
      expect(authHeader).toBeNull();
    });
  });

});
