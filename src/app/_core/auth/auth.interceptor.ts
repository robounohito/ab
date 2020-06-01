import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { App } from 'src/app/app.types';
import { selectCurrentUser } from 'src/app/app.model';
import { flatMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<App>,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(selectCurrentUser).pipe(
      take(1),
      flatMap(({ authToken }) => authToken
        ? next.handle(
          request.clone({
            headers: request.headers
              .set('auth', authToken)
              .set('Content-Type', 'application/json'),
            withCredentials: true,
          }))
        : next.handle(request)
      )
    );
  }

}
