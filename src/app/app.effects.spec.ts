import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { AppEffects } from './app.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { Action } from '@ngrx/store';
import SpyObj = jasmine.SpyObj;
import { ApiService, apiEndpoint } from './_core/api/api.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import {
  readToken, authTokenKey, readTokenSuccess, navigateToLogin, Route, logout, notification,
  loadUserProfile, loadUserProfileSuccess
} from './app.constants';
import { Router } from '@angular/router';
import { toArray } from 'rxjs/operators';
import { CurrentUser } from './app.types';

describe('AppEffects', () => {

  let actions$: Observable<Action>;
  let effects: AppEffects;
  let router: Router;
  let apiServiceSpy: SpyObj<ApiService>;
  let snackBarSpy: SpyObj<MatSnackBar>;

  beforeEach(() => {

    apiServiceSpy = jasmine.createSpyObj('ApiService', ['request', 'endpoint']);
    apiServiceSpy.request.and.returnValue(of({}));
    apiServiceSpy.endpoint = apiEndpoint;

    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MatSnackBarModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        AppEffects,
        provideMockActions(() => actions$),
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    });

    router = TestBed.inject(Router);
    effects = TestBed.inject(AppEffects);

  });

  describe('readToken$', () => {

    beforeEach(() => {
      actions$ = of(readToken());
    });

    it('should read from localStorage and dispatch token', () => {
      const getItemSpy = spyOn(localStorage, 'getItem');
      getItemSpy.and.returnValue(JSON.stringify('authToken'));
      effects.readToken$.subscribe(res => {
        expect(getItemSpy).toHaveBeenCalledWith(authTokenKey);
        expect(res).toEqual(readTokenSuccess({ authToken: 'authToken' }));
      });
    });

  });

  describe('navigateToLogin$', () => {

    beforeEach(() => {
      actions$ = of(navigateToLogin());
    });

    it('should navigate to login', () => {
      const navigateSpy = spyOn(router, 'navigate');
      effects.navigateToLogin$.subscribe(() => {
        expect(navigateSpy).toHaveBeenCalledWith([`/${Route.login}`]);
      });
    });

  });

  describe('logout$', () => {

    beforeEach(() => {
      actions$ = of(logout());
    });

    it('should remove item from localStorage', () => {
      const removeItemSpy = spyOn(localStorage, 'removeItem');
      effects.logout$.subscribe(() => {
        expect(removeItemSpy).toHaveBeenCalledWith(authTokenKey);
      });
    });

    it('should call logout', () => {
      effects.logout$.subscribe(() => {
        expect(apiServiceSpy.request).toHaveBeenCalledWith({
          endpoint: apiEndpoint.getLogout,
        });
      });
    });

    it('should return navigateToLogin and readTokenSuccess', () => {
      effects.logout$.pipe(toArray()).subscribe(res => {
        expect(res).toEqual([
          navigateToLogin(),
          readTokenSuccess({ authToken: null })
        ]);
      });
    });

  });

  describe('notification$', () => {

    beforeEach(() => {
      actions$ = of(notification({
        message: 'message',
        action: 'action',
        config: {}
      }));
    });

    it('should dispatch notifications', () => {
      effects.notification$.subscribe(() => {
        expect(snackBarSpy.open)
          .toHaveBeenCalledWith('message', 'action', {});
      });
    });

  });

  describe('storage$', () => {

    it('should dispatch on localStorage change', () => {
      effects.storage$.subscribe(res => {
        expect(res).toEqual(readTokenSuccess({ authToken: 'authToken' }));
      });
      window.dispatchEvent(new StorageEvent('storage', {
        key: authTokenKey,
        newValue: 'authToken'
      }));
    });

  });

  describe('loadUserProfile$', () => {

    beforeEach(() => {
      actions$ = of(loadUserProfile());
    });

    it('should load user\'s profile', () => {
      const test = {
        firstName: 'firstName',
        contactsToCall: 12,
      } as CurrentUser;
      apiServiceSpy.request.and.returnValue(of(test));
      effects.loadUserProfile$.subscribe(res => {
        expect(res).toEqual(loadUserProfileSuccess({ userProfile: test }));
      });
    });

  });

});
