import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { environment } from '../environments/environment';
import { AuthService } from "./authorization/auth.service";
import { BACKEND_ERROR } from "./shared/error";

const apiUrl = environment.apiUrl;

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    constructor(@Inject(BACKEND_ERROR) private backendError: BehaviorSubject<Error | null>, private router: Router, private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({ withCredentials: true });

        return next.handle(req)
            .pipe(
                catchError(err => {
                    this.backendError.next(err);
                    this.router.navigate(['/error'])
                    return throwError(() => err)
                }));
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};