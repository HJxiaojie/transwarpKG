import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISecond } from 'app/shared/model/second.model';

type EntityResponseType = HttpResponse<ISecond>;
type EntityArrayResponseType = HttpResponse<ISecond[]>;

@Injectable({ providedIn: 'root' })
export class SecondService {
    public resourceUrl = SERVER_API_URL + 'api/seconds';

    constructor(protected http: HttpClient) {}

    create(second: ISecond): Observable<EntityResponseType> {
        return this.http.post<ISecond>(this.resourceUrl, second, { observe: 'response' });
    }

    update(second: ISecond): Observable<EntityResponseType> {
        return this.http.put<ISecond>(this.resourceUrl, second, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ISecond>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ISecond[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
