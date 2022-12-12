import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { OffersModule } from './offers/offers.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { BACKEND_ERROR } from './shared/error';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    OffersModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AuthorizationModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: BACKEND_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
