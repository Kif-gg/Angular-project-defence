import { RouterModule, Routes } from "@angular/router";
import { AdminLoginComponent } from "../auth-admin/admin-login/admin-login.component";
import { AdminLogoutComponent } from "../auth-admin/admin-logout/admin-logout.component";
import { PanelComponent } from "../auth-admin/panel/panel.component";
import { UserDetailsComponent } from "../auth-admin/user-details/user-details.component";
import { AuthGuard } from "../shared/guards/auth-guard";

const routes: Routes = [
    {
        path: '570p/l091n',
        component: AdminLoginComponent,
        // canActivate: [AuthGuard],
        data: {
            title: 'Administration panel',
            // loginRequired: false,
            admin: true,
        }
    },
    {
        path: '570p/logout',
        component: AdminLogoutComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
            admin: true,
        }
    },
    {
        path: '570p/panel',
        component: PanelComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
            admin: true,
        }
    },
    {
        path: '570p/panel/:userId',
        component: UserDetailsComponent,
        canActivate: [AuthGuard],
        data: {
            loginRequired: true,
            admin: true,
        }
    }
]

export const AuthAdminRoutingModule = RouterModule.forChild(routes);