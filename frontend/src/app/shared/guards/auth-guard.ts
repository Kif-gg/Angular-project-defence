import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "src/app/authorization/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user$.pipe(
            take(1),
            map(user => {
                const loginRequired = route.data['loginRequired'];

                if (loginRequired == undefined || !!user == loginRequired) {
                    return true;
                }

                if (!!user) {
                    if (user.role == 'user') {
                        return this.router.createUrlTree(['/']);
                    } else if (user.role == 'admin') {
                        return this.router.createUrlTree(['/o074dm1n/h1dd3n4ddr35s/570p/panel']);
                    }
                } else {
                    return this.router.createUrlTree(['/users/login']);
                }
                return !!user;
            }));
    }
}