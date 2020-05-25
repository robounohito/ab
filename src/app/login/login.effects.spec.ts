import { TestBed } from '@angular/core/testing';
import { provideMockActions, } from '@ngrx/effects/testing';
import { ApiService } from '../_core/api/api.service';
import { of, Observable, throwError } from 'rxjs';
import { LoginEffects } from './login.effects';
import { Action } from '@ngrx/store';
import { login, loginError, LoginError, /* signup */ } from './login.constants';
import { readToken, authTokenKey } from '../app.constants';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LoginEffects', () => {

  let effects: LoginEffects;
  let actions$: Observable<Action>;
  let router: Router;

  const apiServiceSpy = jasmine.createSpyObj('ApiService', ['request', 'endpoint']);

  beforeEach(() => {

    spyOn(localStorage, 'setItem');

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        LoginEffects,
        provideMockActions(() => actions$)
      ],
    });
    effects = TestBed.inject(LoginEffects);
    router = TestBed.inject(Router);

  });

  describe('login$', () => {

    beforeEach(() => {
      actions$ = of(login({
        payload: {
          email: 'email',
          password: 'password',
          rememberMe: true
        }
      }));
    });

    it('should dispatch readToken and tap on success', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(of({ login: 'token' }));
      effects.login$.subscribe(res => {
        expect(navigateSpy).toHaveBeenCalledWith(['/']);
        expect(localStorage.setItem).toHaveBeenCalledWith(authTokenKey, '"token"');
        expect(res).toEqual(readToken());
      });
    });

    it('should dispatch error on error', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(throwError({ error: { message: { error: LoginError.invalidInput } } }));
      effects.login$.subscribe((res) => {
        expect(navigateSpy).not.toHaveBeenCalled();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        expect(res).toEqual(loginError({ error: LoginError.invalidInput }));
      });
    });

  });



  /* it('should dispatch readToken and tap on signup effect', () => {
    actions$ = of(signup({
      payload: {
        email: 'email',
        password: 'password',
        phone: 'phone',
      }
    }));
    apiServiceSpy.request.and.returnValue(of({ account: 'token' }));
    effects.signup$.subscribe(res => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
      expect(localStorage.setItem).toHaveBeenCalledWith(authTokenKey, '"token"');
      expect(res).toEqual(readToken());
    });
  });

  it('should tap on recovery effect', () => {
    actions$ = of(signup({
      payload: {
        email: 'email',
        password: 'password',
        phone: 'phone',
      }
    }));
    apiServiceSpy.request.and.returnValue(of({ account: 'token' }));
    effects.signup$.subscribe(res => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
      expect(localStorage.setItem).toHaveBeenCalledWith(authTokenKey, '"token"');
      expect(res).toEqual(readToken());
    });
  }); */

});
