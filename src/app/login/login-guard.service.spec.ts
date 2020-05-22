import { async, TestBed } from '@angular/core/testing';
import { LoginGuard } from './login-guard.service';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { loginReset } from './login.constants';
import { Login } from './login.types';

describe('LoginGuard', () => {

  let service: LoginGuard;
  let store: Store<Login>;

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
    store = TestBed.inject(Store);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should invoke loginReset on canActivate', () => {
    spyOn(store, 'dispatch');
    service.canActivate().subscribe(res => {
      expect(store.dispatch).toHaveBeenCalledWith(loginReset());
      expect(res).toBeTruthy();
    }, console.error);
  });

});
