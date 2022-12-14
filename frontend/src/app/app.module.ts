import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { BACKEND_ERROR } from './shared/error';
import { BehaviorSubject } from 'rxjs';
import { RequestRepairComponent } from './request-repair/request-repair.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    RequestRepairComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: BACKEND_ERROR,
      useValue: new BehaviorSubject(null)
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
