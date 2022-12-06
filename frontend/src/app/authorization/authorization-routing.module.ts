import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'users/login',
        component: LoginComponent
    },
    {
        path: 'users/register',
        component: RegisterComponent
    },
    {
        path: 'users/logout',
        component: LogoutComponent
    },
    {
        path: 'users/:userId/profile',
        component: ProfileComponent
    }
]

export const AuthorizationRoutingModule = RouterModule.forChild(routes);