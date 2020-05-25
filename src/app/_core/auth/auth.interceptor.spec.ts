import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
// import { HttpRequest } from '@angular/common/http';

describe('AuthInterceptor', () => {

  let interceptor: AuthInterceptor;
  let store: MockStore;

  beforeEach(() => {
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

  it('should add Authorization header when there is authToken', () => {
    store.setState({ shared: { currentUser: { authToken: null } } });
    /* interceptor.intercept(new HttpRequest('GET', ''), null!).subscribe(() => {
      // expect(res).toEqual({});
    }); */
  });

  /* it('should not add Authorization header when there is no authToken', () => {
    expect(interceptor).toBeTruthy();
  }); */

});
