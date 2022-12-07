import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth-guard";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

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
    }
]

export const AuthorizationRoutingModule = RouterModule.forChild(routes);