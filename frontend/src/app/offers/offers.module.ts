import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OffersListComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ],
  exports: [
    OffersListComponent
  ]
})
export class OffersModule { }
