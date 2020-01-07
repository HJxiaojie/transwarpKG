import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KnowledgeGraphSharedCommonModule, KnowledgeGraphSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { KnowledgeGraphEntityModule } from 'app/entities/entity.module';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        KnowledgeGraphSharedModule,
        RouterModule.forChild([HOME_ROUTE]),
        KnowledgeGraphEntityModule,
        KnowledgeGraphSharedCommonModule,
        CommonModule,
        NgZorroAntdModule,
        BrowserAnimationsModule
    ],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KnowledgeGraphHomeModule {}
