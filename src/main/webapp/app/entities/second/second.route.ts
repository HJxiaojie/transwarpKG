import {Route} from '@angular/router';
import {SecondItemBComponent} from "app/entities/second/second-item-b/second-item-b.component";
import {UserRouteAccessService} from "app/core";
import {SecondItemAComponent} from "app/entities/second/second-item-a/second-item-a.component";

export const second: Route = {
    path: 'second',
    children: [
        {
            path: '',
            redirectTo: 'item-a',
            pathMatch: 'full'
        },
        {
            path: 'item-a',
            component: SecondItemAComponent,
            data: {
                pageTitle: 'item.item2'
            },
            canActivate: [UserRouteAccessService]
        },
        {
            path: 'item-b',
            component: SecondItemBComponent,
            data: {
                pageTitle: 'item.item3'
            },
            canActivate: [UserRouteAccessService]
        },

    ]
};
