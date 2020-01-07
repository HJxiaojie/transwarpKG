import { UserRouteAccessService } from 'app/core';

import { Route } from '@angular/router';
import {KGSearchComponent} from "app/entities/kg/kg-search/kg-search.component";
import {FirstItemBComponent} from "app/entities/kg/first-item-b/first-item-b.component";

export const kg: Route = {
    path: 'kg',
    children: [
        {
            path: '',
            redirectTo: 'kg-search',
            pathMatch: 'full'
        },
        {
            path: 'kg-search',
            component: KGSearchComponent,
            data: {

            },
            canActivate: [UserRouteAccessService]
        },
        {
            path: 'item-b',
            component: FirstItemBComponent,
            data: {
                pageTitle: 'item.itemA'
            },
            canActivate: [UserRouteAccessService]
        },

    ]
};
