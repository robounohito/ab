import { Injectable } from '@angular/core';
import { HttpEvent, HttpParams, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { navigateToLogin, notification } from 'src/app/app.constants';

export const bypassHttpErrorInterceptor = 'bypassHttpErrorInterceptor';
const unauthorised = 401;

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private store: Store<App>) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newRequest = request;
    let errorsToBypass: boolean | string | null;
    if (request.params.has(bypassHttpErrorInterceptor)) {
      errorsToBypass = request.params.get(bypassHttpErrorInterceptor);
      let params = new HttpParams({ fromString: request.params.toString() });
      params = params.delete(bypassHttpErrorInterceptor);
      newRequest = request.clone({ params });
    }
    return next.handle(newRequest).pipe(
      timeout(50000),
      catchError((err: HttpErrorResponse) => {
        if (err.status === unauthorised) {
          this.store.dispatch(navigateToLogin());
          return throwError(err);
        }
        if (errorsToBypass && (errorsToBypass === true || errorsToBypass.includes(err.error.code))) {
          return throwError(err);
        }
        this.errorHandler(err);
        return EMPTY;
      })
    );
  }

  errorHandler(err: HttpErrorResponse) {
    this.store.dispatch(notification({
      message: err?.error?.message || err?.error?.ErrorDetails?.Description,
      action: 'Dismiss',
      config: { panelClass: ['red-snackbar'] }
    }));
    if (err.error instanceof Error) {
      // A client-side or network error
      console.error('An error occurred:', err.error.message);
    } else {
      // A backend error
      console.error(`Backend returned code ${err.status}, body was:`, err.error);
    }
  }

}
