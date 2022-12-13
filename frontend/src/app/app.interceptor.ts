import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Observable } from "rxjs";
import { environment } from '../environments/environment';
import { BACKEND_ERROR } from "./shared/error";

const apiUrl = environment.apiUrl;

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    constructor(@Inject(BACKEND_ERROR) private backendError: BehaviorSubject<Error | null>, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({

        })
        return next.handle(req).pipe(
            catchError(err => {
                if (err.status === 401) {
                    this.router.navigate(['/users/login'])
                }
                this.backendError.next(err);
                this.router.navigate(['/error'])
                return [err];
            }));
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};