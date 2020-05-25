import { async, TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from 'src/app/app.constants';

describe('AuthGuard', () => {

  let service: AuthGuard;
  let store: MockStore;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        AuthGuard,
        provideMockStore({
          initialState: {
            shared: { currentUser: { authToken: null } }
          }
        }),
      ]
    });
    service = TestBed.inject(AuthGuard);
    store = TestBed.inject(Store) as MockStore;
    router = TestBed.inject(Router);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should go to login when there is no authToken', () => {
    store.setState({ shared: { currentUser: { authToken: null } } });
    service.canActivate().subscribe(res => {
      expect(res).toEqual(router.parseUrl(`/${Route.login}`));
    });
  });

  it('should return true when there is an authToken', () => {
    store.setState({ shared: { currentUser: { authToken: 'token' } } });
    service.canActivate().subscribe(res => {
      expect(res).toEqual(true);
    });
  });

});
