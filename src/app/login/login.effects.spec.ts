import { TestBed } from '@angular/core/testing';
import { provideMockActions, } from '@ngrx/effects/testing';
import { ApiService, apiEndpoint } from '../_core/api/api.service';
import { of, Observable, throwError } from 'rxjs';
import { LoginEffects } from './login.effects';
import { Action } from '@ngrx/store';
import { login, loginError, LoginError, signup, recovery, reset, } from './login.constants';
import { readToken, authTokenKey, Route } from '../app.constants';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import SpyObj = jasmine.SpyObj;

fdescribe('LoginEffects', () => {

  let effects: LoginEffects;
  let actions$: Observable<Action>;
  let router: Router;
  let apiServiceSpy: SpyObj<ApiService>;

  beforeEach(() => {

    spyOn(localStorage, 'setItem');

    apiServiceSpy = jasmine.createSpyObj('ApiService', ['request', 'endpoint']);
    apiServiceSpy.endpoint = apiEndpoint;

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
      apiServiceSpy.request.and.returnValue(of({ token: 'token' }));
      effects.login$.subscribe(res => {
        expect(apiServiceSpy.request).toHaveBeenCalledWith({
          endpoint: apiEndpoint.postLogin,
          data: {
            email: 'email',
            password: 'password',
            persistSession: true,
          },
          queryParams: { bypassHttpErrorInterceptor: true }
        });
        expect(navigateSpy).toHaveBeenCalledWith(['/']);
        expect(localStorage.setItem).toHaveBeenCalledWith(authTokenKey, '"token"');
        expect(res).toEqual(readToken());
      });
    });

    it('should dispatch invalidEmailOrPassword on error', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(throwError({}));
      effects.login$.subscribe((res) => {
        expect(navigateSpy).not.toHaveBeenCalled();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        expect(res).toEqual(loginError({ error: LoginError.invalidEmailOrPassword }));
      });
    });

  });

  describe('signup$', () => {

    beforeEach(() => {
      actions$ = of(signup({
        payload: {
          email: 'email',
          password: 'password',
          phone: 'phone',
        }
      }));
    });

    it('should dispatch readToken and tap on success', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(of({ token: 'token' }));
      effects.signup$.subscribe(res => {
        expect(apiServiceSpy.request).toHaveBeenCalledWith({
          endpoint: apiEndpoint.postSignup,
          data: {
            email: 'email',
            password: 'password',
            phone: 'phone',
          },
          queryParams: { bypassHttpErrorInterceptor: true }
        });
        expect(navigateSpy).toHaveBeenCalledWith(['/']);
        expect(localStorage.setItem).toHaveBeenCalledWith(authTokenKey, '"token"');
        expect(res).toEqual(readToken());
      });
    });

    it('should dispatch invalidInput on error', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(throwError({}));
      effects.signup$.subscribe((res) => {
        expect(navigateSpy).not.toHaveBeenCalled();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        expect(res).toEqual(loginError({ error: LoginError.invalidInput }));
      });
    });

  });

  describe('recovery$', () => {

    beforeEach(() => {
      actions$ = of(recovery({
        payload: {
          email: 'email',
          recoveryType: 'email',
        }
      }));
    });

    it('should dispatch tap on success', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(of({}));
      effects.recovery$.subscribe({
        complete: () => {
          expect(apiServiceSpy.request).toHaveBeenCalledWith({
            endpoint: apiEndpoint.postRecover,
            data: {
              email: 'email',
              recoveryType: 'email',
            },
            queryParams: { bypassHttpErrorInterceptor: true }
          });
          expect(navigateSpy).toHaveBeenCalledWith(['/', Route.login, Route.reset]);
        }
      });
    });

    it('should dispatch invalidInput on error', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(throwError({}));
      effects.recovery$.subscribe((res) => {
        expect(navigateSpy).not.toHaveBeenCalled();
        expect(res).toEqual(loginError({ error: LoginError.invalidInput }));
      });
    });

  });

  describe('reset$', () => {

    beforeEach(() => {
      actions$ = of(reset({
        payload: {
          email: 'email',
          password: 'password',
          recoveryCode: 'recoveryCode',
        }
      }));
    });

    it('should dispatch readToken and tap on success', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(of({ token: 'token' }));
      effects.reset$.subscribe(res => {
        expect(apiServiceSpy.request).toHaveBeenCalledWith({
          endpoint: apiEndpoint.postReset,
          data: {
            email: 'email',
            password: 'password',
            code: 'recoveryCode',
          },
          queryParams: { bypassHttpErrorInterceptor: true }
        });
        expect(navigateSpy).toHaveBeenCalledWith(['/']);
        expect(localStorage.setItem).toHaveBeenCalledWith(authTokenKey, '"token"');
        expect(res).toEqual(readToken());
      });
    });

    it('should dispatch invalidInput on error', () => {
      const navigateSpy = spyOn(router, 'navigate');
      apiServiceSpy.request.and.returnValue(throwError({}));
      effects.reset$.subscribe((res) => {
        expect(navigateSpy).not.toHaveBeenCalled();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        expect(res).toEqual(loginError({ error: LoginError.invalidInput }));
      });
    });

  });

});
