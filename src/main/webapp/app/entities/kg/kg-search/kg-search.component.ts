import {Component, OnInit} from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import {KgService} from "app/entities/kg";
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-kg-search',
    templateUrl: './kg-search.component.html',
    styles: []
})
export class KGSearchComponent implements OnInit {
    file: UploadFile;

    constructor(private message: NzMessageService, private kg: KgService) {
    }

    ngOnInit() {
    }

    kgSearch() {
        console.log("hhhhhhhh")
    }


    handleChange({file, fileList}): void {
        const status = file.status;
        if (status !== 'uploading') {
        }
        if (status === 'done') {
            console.log(file);
            this.message.success(`${file.name}文件上传成功！`)
        } else if (status === 'error') {
            this.message.error(`${file.name} 文件上传失败，请重试！`);
        }
    }



}
