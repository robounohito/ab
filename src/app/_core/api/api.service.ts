import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forEachObjIndexed, isNil } from 'ramda';

export interface ApiRequest {
  endpoint: {
    method: string;
    url: string;
  };
  urlParams?: {};
  data?: {};
  queryParams?: { [key: string]: string | string[] };
  reportProgress?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'api/';
  endpoint = {
    getHubspotAuth: { method: 'get', url: 'autobound/mission_control/integrations/hubspot/userID/{email}' },
    getGmailAuth: { method: 'get', url: 'autobound/mission_control/integrations/gmail/authorization' },
    getSidebar: { method: 'get', url: 'sidebar' },
    getCampaigns: { method: 'get', url: 'autobound/sequences/list' },
    getSettings: { method: 'get', url: 'settings' },
    postSignup: { method: 'post', url: 'register' },
    postLogin: { method: 'post', url: 'login' },
    postRecover: { method: 'post', url: 'recover' },
    postReset: { method: 'post', url: 'reset' },
  };

  constructor(
    private http: HttpClient
  ) { }

  request<T>(
    { endpoint, urlParams, data, queryParams, reportProgress = false }: ApiRequest,
    domain = ''
  ): Observable<T> {
    let options;
    if (queryParams) {
      let params = new HttpParams();
      for (const key of Object.keys(queryParams)) {
        ((Array.isArray(queryParams[key]) && key !== 'bypassErrorHttpInterceptor')
          ? queryParams[key] as string[]
          : [queryParams[key] as string]
        ).forEach((item: string) => params = params.append(key, item));
      }
      options = { params };
      if (reportProgress) {
        options = {
          ...options,
          reportProgress: true,
          observe: 'events'
        };
      }
    }
    // @ts-ignore
    return this.http[endpoint.method](
      domain + this.baseUrl + this.makeUrl(endpoint.url, urlParams),
      !isNil(data) ? data : options,
      !isNil(data) ? options : null
    );
  }

  makeUrl(pattern: string, params: { [key: string]: string | number } = {}): string {
    let result = pattern;
    forEachObjIndexed((value: string | number = '', key) => {
      const regx = new RegExp('{' + key + '}', 'ig');
      result = result.replace(regx, value.toString().toLowerCase());
    })(params);
    return result;
  }

}
