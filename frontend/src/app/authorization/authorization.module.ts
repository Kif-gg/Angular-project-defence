import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './regular-user/login/login.component';
import { RegisterComponent } from './regular-user/register/register.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LogoutComponent } from './regular-user/logout/logout.component';
import { ProfileComponent } from './regular-user/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin/admin-logout/admin-logout.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { PanelComponent } from './admin/panel/panel.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    UserDetailsComponent,
    PanelComponent,
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthorizationModule { }
