import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersListComponent,
    HomeComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AuthorizationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
