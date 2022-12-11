import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth-guard";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { AdminLogoutComponent } from "./admin/admin-logout/admin-logout.component";
import { PanelComponent } from "./admin/panel/panel.component";
import { UserDetailsComponent } from "./admin/user-details/user-details.component";
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
            loginRequired: false,
            admin: false
        }
    },
    {
        path: 'users/register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Register',
            loginRequired: false,
            admin: false
        }
    },
    {
        path: 'users/logout',
        component: LogoutComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
            admin: false
        }
    },
    {
        path: 'users/:userId/profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'My profile',
            loginRequired: true,
            admin: false
        }
    },
    {
        path: 'o074dm1n/h1dd3n4ddr35s/570p/l091n',
        component: AdminLoginComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Administration panel',
            loginRequired: false,
            admin: true,
        }
    },
    {
        path: 'o074dm1n/h1dd3n4ddr35s/570p/logout',
        component: AdminLogoutComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
            admin: true,
        }
    },
    {
        path: 'o074dm1n/h1dd3n4ddr35s/570p/panel',
        component: PanelComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
            admin: true,
        }
    },
    {
        path: 'o074dm1n/h1dd3n4ddr35s/570p/panel/:userId',
        component: UserDetailsComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
            admin: true,
        }
    }
]

export const AuthorizationRoutingModule = RouterModule.forChild(routes);