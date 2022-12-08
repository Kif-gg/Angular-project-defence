import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OfferDetailsComponent } from './offer-details/offer-details.component';



@NgModule({
  declarations: [
    OffersListComponent,
    OfferDetailsComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ],
  exports: [
    OffersListComponent,
    OfferDetailsComponent
  ]
})
export class OffersModule { }
