import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {

  let service: ApiService;

  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  httpClientSpy.get.and.returnValue(of({ data: 'some data' }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: HttpClient, useValue: httpClientSpy },
      ]
    });
    service = TestBed.inject(ApiService);
  });

  describe('instance', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('request method', () => {
    it('should return proper data on valid input', () => {
      service.request({
        endpoint: service.endpoint.getSidebar,
      }).subscribe(data => {
        expect(data).toEqual({ data: 'some data' });
      });
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
  });

  describe('makeUrl method', () => {
    it('should return proper url on valid input', () => {
      expect(service.makeUrl(
        service.endpoint.getHubspotAuth.url,
        { email: '1' }
      )).toEqual('autobound/mission_control/integrations/hubspot/userID/1');
    });
  });

});
