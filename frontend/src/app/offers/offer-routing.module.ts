import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth-guard";
import { NewOfferComponent } from "./new-offer/new-offer.component";
import { OfferDetailsComponent } from "./offer-details/offer-details.component";
import { OffersListComponent } from "./offers-list/offers-list.component";

const routes: Routes = [
    {
        path: 'data',
        children: [
            {
                path: 'offers',
                component: OffersListComponent,
                data: {
                    title: 'Offers',
                    loginRequired: false
                }
            },
            {
                path: 'offers/create',
                component: NewOfferComponent,
                canActivate: [AuthGuard],


                data: {
                    title: 'Create offer',
                    loginRequired: true
                }
            },
            {
                path: 'offers/:id',
                component: OfferDetailsComponent,
                data: {
                    title: 'Details',
                    loginRequired: false
                }
            },
        ]
    }
];

export const OfferRoutingModule = RouterModule.forChild(routes);