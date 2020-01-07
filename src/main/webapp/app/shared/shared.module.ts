import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { KnowledgeGraphSharedLibsModule, KnowledgeGraphSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RouterModule } from '@angular/router';

registerLocaleData(zh);

@NgModule({
    imports: [KnowledgeGraphSharedLibsModule, KnowledgeGraphSharedCommonModule, NgZorroAntdModule, RouterModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [
        { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter },
        {
            provide: NZ_ICON_DEFAULT_TWOTONE_COLOR,
            useValue: '#00ff00'
        }, // 不提供的话，即为 Ant Design 的主题蓝色
        { provide: NZ_ICONS, useValue: icons }
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [KnowledgeGraphSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, NgZorroAntdModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KnowledgeGraphSharedModule {
    static forRoot() {
        return {
            ngModule: KnowledgeGraphSharedModule
        };
    }
}
