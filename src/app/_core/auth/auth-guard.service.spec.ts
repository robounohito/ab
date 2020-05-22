import { AuthGuard } from './auth-guard.service';
import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('AuthGuard', () => {

  let service: AuthGuard;

  beforeEach(async(() => {

    const user = {
      isExternal: true
    };

    const authServiceSpy = jasmine.createSpyObj('CurrentUserService', ['getDataModel']);
    authServiceSpy.getDataModel.and.returnValue(of(user));

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    routerSpy.navigate.and.returnValue(true);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy },
      ]
    });

    service = TestBed.inject(AuthGuard);

  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
