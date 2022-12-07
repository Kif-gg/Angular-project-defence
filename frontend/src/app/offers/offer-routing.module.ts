import { RouterModule, Routes } from "@angular/router";
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
                    title: 'All offers',
                    loginRequired: false
                }
            },
            {
                path: 'offers?where=_ownerId%3D%22{userId}%3D',
                component: OffersListComponent,
                data: {
                    title: 'My offers',
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
            }
        ]
    }
];

export const OfferRoutingModule = RouterModule.forChild(routes);