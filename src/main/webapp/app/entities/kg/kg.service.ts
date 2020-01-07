import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IFirst } from 'app/shared/model/first.model';

type EntityResponseType = HttpResponse<IFirst>;
type EntityArrayResponseType = HttpResponse<IFirst[]>;

@Injectable({ providedIn: 'root' })
export class KgService {
    public resourceUrl = SERVER_API_URL + 'api/kgSearch';

    constructor(protected http: HttpClient) {}

    create(first: IFirst): Observable<EntityResponseType> {
        return this.http.post<IFirst>(this.resourceUrl, first, { observe: 'response' });
    }

    update(first: IFirst): Observable<EntityResponseType> {
        return this.http.put<IFirst>(this.resourceUrl, first, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IFirst>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IFirst[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    uploadFile(formdata: FormData): Observable<HttpResponse<any>> {
        console.log(formdata);
        // const req = new HttpRequest('POST', this.resourceUrl+'/uploadFile', formdata, {
        //     // reportProgress: true
        // });
        // this.http
        //     .request(req)
        //     .pipe(filter(e => e instanceof HttpResponse))
        //     .subscribe(
        //         (event: {}) => {
        //         },
        //         err => {
        //         }
        //     );
        return this.http.post<any>(this.resourceUrl+'/uploadFile', formdata, { observe: 'response'});
    }

}
