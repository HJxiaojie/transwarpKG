import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {KnowledgeGraphSharedModule} from "app/shared";
import {KnowledgeGraphSecondModule} from "app/entities/second/second.module";
import {KGModule} from "app/entities/kg/kg.module";

@NgModule({
    imports: [
        KnowledgeGraphSharedModule, KGModule, KnowledgeGraphSecondModule
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KnowledgeGraphEntityModule {}
