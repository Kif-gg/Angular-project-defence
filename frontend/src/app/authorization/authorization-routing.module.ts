import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'users',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Log in'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'Register'
                }
            },
            {
                path: 'logout',
                component: LogoutComponent,
            },
            {
                path: ':userId/profile',
                component: ProfileComponent,
                data: {
                    title: 'My profile'
                }
            }

        ]
    },
]

export const AuthorizationRoutingModule = RouterModule.forChild(routes);