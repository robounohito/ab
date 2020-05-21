// tslint:disable:quotemark

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith('api/login')
      && request.method === 'GET') {
      // return throwError(new HttpErrorResponse({ error: { code: 1035 } })).pipe(delay(50));
      return of(new HttpResponse({
        status: 200, body: mock
      })).pipe(delay(50));
    }
    return next.handle(request);
  }
}

const mock: any = [];
