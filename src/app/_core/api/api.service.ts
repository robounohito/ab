import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forEachObjIndexed, isNil } from 'ramda';
import { bypassHttpErrorInterceptor } from '../errors/http-error.interceptor';
import { blankProfiilePic } from 'src/app/app.constants';

export interface ApiRequest {
  endpoint: {
    method: string;
    url: string;
  };
  urlParams?: {};
  data?: {};
  queryParams?: { [key: string]: string | string[] | boolean | number | number[] };
  reportProgress?: boolean;
}

export const apiEndpoint = {
  getHubspotAuth: { method: 'get', url: 'autobound/mission_control/integrations/hubspot/userID/{email}' },
  getGmailAuth: { method: 'get', url: 'autobound/mission_control/integrations/gmail/authorization' },
  getSidebar: { method: 'get', url: 'sidebar' },
  getCampaigns: { method: 'get', url: 'autobound/sequences/list' },
  getSuggestedCampaigns: { method: 'get', url: 'autobound/suggested' },
  getInsights: { method: 'get', url: 'autobound/insights/{contactId}' },
  getAttachment: { method: 'get', url: 'attachments/{id}' },
  postAttachment: { method: 'post', url: 'attachments' },
  getStats: { method: 'get', url: 'stats' },
  getUserProfile: { method: 'get', url: 'userProfile' },
  postUserProfile: { method: 'post', url: 'userProfile' },
  getLogout: { method: 'get', url: 'auth/logout' },
  postSignup: { method: 'post', url: 'auth/register' },
  postLogin: { method: 'post', url: 'auth/login' },
  postRecover: { method: 'post', url: 'auth/recover' },
  postReset: { method: 'post', url: 'auth/reset' },
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'api/';
  endpoint = apiEndpoint;

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
        ((Array.isArray(queryParams[key]) && key !== bypassHttpErrorInterceptor)
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

  getAttachment(id: string) {
    return id
      ? this.baseUrl + this.makeUrl(apiEndpoint.getAttachment.url, { id })
      : blankProfiilePic;
  }

  private makeUrl(pattern: string, params: { [key: string]: string | number } = {}): string {
    let result = pattern;
    forEachObjIndexed((value: string | number = '', key) => {
      const regx = new RegExp('{' + key + '}', 'ig');
      result = result.replace(regx, value.toString().toLowerCase());
    })(params);
    return result;
  }

}
