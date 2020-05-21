import { AuthGuard } from './auth-guard.service';
import { async, TestBed } from '@angular/core/testing';
import { CurrentUser } from './current-user.types';
import { of } from 'rxjs';
import { Router, UrlSegment } from '@angular/router';
import { CurrentUserService } from './current-user.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

describe('AuthGuard', () => {

  let service: AuthGuard;

  beforeEach(async(() => {

    const user = {
      isExternal: true
    } as CurrentUser;

    const authServiceSpy = jasmine.createSpyObj('CurrentUserService', ['getDataModel']);
    authServiceSpy.getDataModel.and.returnValue(of(user));

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(true);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: CurrentUserService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ]
    });

    service = TestBed.get(AuthGuard);

  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isExternalAccepted should return true for "terms" or "privacy"', () => {
    (service.isExternalAccepted([{ path: 'terms' } as UrlSegment]) as Observable<boolean>)
      .pipe(take(1)).subscribe(model => {
        expect(model).toEqual(true);
      });
    (service.isExternalAccepted([{ path: 'privacy' } as UrlSegment]) as Observable<boolean>)
      .pipe(take(1)).subscribe(model => {
        expect(model).toEqual(true);
      });
  });

  it('isExternalAccepted should return undefined (making redirect)', () => {
    (service.isExternalAccepted([{ path: 'angagement-list' } as UrlSegment]) as Observable<boolean>)
      .pipe(take(1)).subscribe(model => {
        expect(model).toBeUndefined();
      });
  });

});
