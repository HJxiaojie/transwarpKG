import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JhiLanguageService} from 'ng-jhipster';

import {KnowledgeGraphSharedModule} from 'app/shared';
import {SecondItemBComponent} from "app/entities/second/second-item-b/second-item-b.component";
import {SecondItemAComponent} from "app/entities/second/second-item-a/second-item-a.component";


@NgModule({
    imports: [KnowledgeGraphSharedModule, RouterModule],
    declarations: [SecondItemAComponent, SecondItemBComponent],
    entryComponents: [],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KnowledgeGraphSecondModule {
}
