import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth-guard";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { LoginComponent } from "./regular-user/login/login.component";
import { LogoutComponent } from "./regular-user/logout/logout.component";
import { ProfileComponent } from "./regular-user/profile/profile.component";
import { RegisterComponent } from "./regular-user/register/register.component";

const routes: Routes = [
    {
        path: 'users/login',
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Log in',
            loginRequired: false
        }
    },
    {
        path: 'users/register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Register',
            loginRequired: false
        }
    },
    {
        path: 'users/logout',
        component: LogoutComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
        }
    },
    {
        path: 'users/:userId/profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'My profile',
            loginRequired: true,
        }
    },
    {
        path: 'o074dm1n/h1dd3n4ddr35s/570p/l091n',
        component: AdminLoginComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'My profile',
            loginRequired: false,
            admin: true,
        }
    },
    {
        path: 'users/:userId/profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'My profile',
            loginRequired: true,
        }
    }
]

export const AuthorizationRoutingModule = RouterModule.forChild(routes);