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
        endpoint: service.endpoint.approveExternalCounter,
        urlParams: { engagementId: 1 },
        queryParams: { containerId: '2' }
      }).subscribe(data => {
        expect(data).toEqual({ data: 'some data' });
      });
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should throw on invalid input', () => {
      httpClientSpy.get.calls.reset();
      expect(() => service.request({ endpoint: null! })).toThrowError(TypeError);
      expect(httpClientSpy.get.calls.count()).toBe(0, 'no calls');
    });

  });

  describe('makeUrl method', () => {

    it('should return proper url on valid input', () => {
      expect(service.makeUrl(
        service.endpoint.getEngagement.url,
        { engagementId: 1 }
      )).toEqual('engagements/1');
    });

    it('should throw on invalid input', () => {
      expect(() => service.makeUrl(null!, null!)).toThrowError(TypeError);
    });

  });

});
