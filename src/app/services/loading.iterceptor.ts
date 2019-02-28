import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  totalRequests: number = 0;

  constructor(private loadingService: LoadingService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loadingService.display(true);

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.decreaseTotal();
        }
      }),
      catchError((err) => {
        this.decreaseTotal();
        throw err;
      })
    );
  }

  decreaseTotal() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.loadingService.display(false);
    }
  }
}
