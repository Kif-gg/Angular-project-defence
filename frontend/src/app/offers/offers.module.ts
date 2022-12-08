import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OffersListComponent,
    OfferDetailsComponent,
    NewOfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    OffersListComponent,
    OfferDetailsComponent
  ]
})
export class OffersModule { }
