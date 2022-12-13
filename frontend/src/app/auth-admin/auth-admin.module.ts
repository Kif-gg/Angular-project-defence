import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthAdminRoutingModule } from './auth-admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { PanelComponent } from './panel/panel.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminLogoutComponent,
    UserDetailsComponent,
    PanelComponent,
  ],
  imports: [
    CommonModule,
    AuthAdminRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class AuthAdminModule { }
