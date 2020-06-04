import { TestBed } from '@angular/core/testing';
import { provideMockActions, } from '@ngrx/effects/testing';
import { ApiService, apiEndpoint } from '../_core/api/api.service';
import { of, Observable } from 'rxjs';
import { DashboardEffects } from './dashboard.effects';
import { Action } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import SpyObj = jasmine.SpyObj;
import { loadDashboard, Outreach, loadDashboardSuccess } from './dashboard.constants';
import { Dashboard } from './dashboard.types';

describe('DashboardEffects', () => {

  let effects: DashboardEffects;
  let actions$: Observable<Action>;
  let apiServiceSpy: SpyObj<ApiService>;

  beforeEach(() => {

    apiServiceSpy = jasmine.createSpyObj('ApiService', ['request', 'endpoint']);
    apiServiceSpy.endpoint = apiEndpoint;

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        DashboardEffects,
        provideMockActions(() => actions$)
      ],
    });

    effects = TestBed.inject(DashboardEffects);

  });

  describe('dashboard$', () => {

    beforeEach(() => {
      actions$ = of(loadDashboard({
        selectedOutreach: Outreach.all
      }));
    });

    it('should call api and dispatch loadDashboardSuccess on success', () => {
      apiServiceSpy.request.and.returnValue(of([{ replied_rate: '1' }]));
      effects.dashboard$.subscribe(res => {
        expect(apiServiceSpy.request).toHaveBeenCalledWith({
          endpoint: apiEndpoint.getOutreachMetrics,
          data: Outreach.all
        });
        expect(res).toEqual(loadDashboardSuccess({
          outreachMetrics: { replied_rate: '1' } as Dashboard
        }));
      });
    });

  });

});
