import { async, TestBed } from '@angular/core/testing';
import { LoginGuard } from './login-guard.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { loginReset } from './login.constants';
import { Store } from '@ngrx/store';

describe('LoginGuard', () => {

  let service: LoginGuard;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginGuard,
        provideMockStore({
          initialState: {
            login: { error: 'error', loading: true }
          }
        }),
      ]
    });
    service = TestBed.inject(LoginGuard);
    store = TestBed.inject(Store) as MockStore;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should invoke loginReset on canActivate when there is an error', () => {
    store.setState({ login: { error: 'error', loading: false } });
    spyOn(store, 'dispatch');
    service.canActivate().subscribe(res => {
      expect(store.dispatch).toHaveBeenCalledWith(loginReset());
      expect(res).toBeTruthy();
    }, console.error);
  });

  it('should invoke loginReset on canActivate when there is a loading', () => {
    store.setState({ login: { error: '', loading: true } });
    spyOn(store, 'dispatch');
    service.canActivate().subscribe(res => {
      expect(store.dispatch).toHaveBeenCalledWith(loginReset());
      expect(res).toBeTruthy();
    }, console.error);
  });

  it('should not invoke loginReset on canActivate when there is no error and no loading', () => {
    store.setState({ login: { error: '', loading: false } });
    spyOn(store, 'dispatch');
    service.canActivate().subscribe(res => {
      expect(store.dispatch).not.toHaveBeenCalled();
      expect(res).toBeTruthy();
    }, console.error);
  });

});
