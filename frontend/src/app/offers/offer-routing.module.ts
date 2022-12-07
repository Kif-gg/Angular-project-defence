import { RouterModule, Routes } from "@angular/router";
import { OffersListComponent } from "./offers-list/offers-list.component";

const routes: Routes = [
    {
        path: 'data',
        children: [
            {
                path: 'offers',
                component: OffersListComponent,
                data: {
                    title: 'All offers'
                }
            },
            {
                path: 'offers?where=_ownerId%3D%22{userId}%3D',
                component: OffersListComponent,
                data: {
                    title: 'My offers'
                }
            }
        ]
    }
];

export const OfferRoutingModule = RouterModule.forChild(routes);