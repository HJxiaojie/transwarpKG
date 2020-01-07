import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';

import { KnowledgeGraphSharedModule } from 'app/shared';
import { FirstItemBComponent } from './first-item-b/first-item-b.component';
import {KGSearchComponent} from "app/entities/kg/kg-search/kg-search.component";


@NgModule({
    imports: [KnowledgeGraphSharedModule, RouterModule],
    declarations: [KGSearchComponent, FirstItemBComponent],
    entryComponents: [],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KGModule {
}
