import { Route } from '@angular/router';

import { HomeComponent } from './';
import {UserRouteAccessService} from "app/core";
import {kg} from "app/entities/kg";
import {second} from "app/entities/second";

const HOME_ROUTES = [kg, second];
export const HOME_ROUTE: Route = {
    path: '',
    component: HomeComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.homePageTitle'
    },
    children: HOME_ROUTES,
    canActivate: [UserRouteAccessService]
};
