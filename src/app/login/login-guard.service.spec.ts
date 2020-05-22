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
            login: { error: 'error' }
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
    spyOn(store, 'dispatch');
    service.canActivate().subscribe(res => {
      expect(store.dispatch).toHaveBeenCalledWith(loginReset());
      expect(res).toBeTruthy();
    }, console.error);
  });

  it('should not invoke loginReset on canActivate when there is\'nt an error', () => {
    store.setState({ login: { error: '' } });
    spyOn(store, 'dispatch');
    service.canActivate().subscribe(res => {
      expect(store.dispatch).not.toHaveBeenCalled();
      expect(res).toBeTruthy();
    }, console.error);
  });

});
