import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request)).pipe(
      catchError((requestError: HttpErrorResponse) => {
        if (requestError && requestError.status === 401) {
          return next.handle(request);
        }
        return throwError(() => new Error(requestError.message));
      })
    );
  }

  addAuthToken(request: HttpRequest<unknown>) {
    const token: string = this.authService.getAuthToken();
    if (!token) {
      return request;
    }
    return request.clone({
      setHeaders: {
        Authorization: `Basic ${token}`,
      },
    });
  }
}
