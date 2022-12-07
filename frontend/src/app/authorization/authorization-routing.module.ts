import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth-guard";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'users',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Log in',
                    loginRequired: false
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'Register',
                    loginRequired: false
                }
            },
            {
                path: 'logout',
                component: LogoutComponent,
                data: {
                    loginRequired: true,
                }
            },
            {
                path: ':userId/profile',
                component: ProfileComponent,
                data: {
                    title: 'My profile',
                    loginRequired: true,
                }
            }

        ]
    },
]

export const AuthorizationRoutingModule = RouterModule.forChild(routes);