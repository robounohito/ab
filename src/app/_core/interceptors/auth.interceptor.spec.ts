import { TestBed } from '@angular/core/testing';
import { ApiService } from '../api/api.service';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {

  let interceptor: AuthInterceptor;

  beforeEach(() => {

    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['request']);
    apiServiceSpy.endpoint = {
      getCurrentUser: { url: 'current-user' },
      getGeos: { url: 'geos' }
    };
    apiServiceSpy.baseUrl = '/';

    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    });

    interceptor = TestBed.inject(AuthInterceptor);

  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

});
