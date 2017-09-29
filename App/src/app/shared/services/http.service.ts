import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(api:string):Observable<any>{
    return this.http.get(api);
  }

  postData(api:string, data:any):Observable<any>{
    return this.http.get(api, data);
  }

  deleteData(api:string):Observable<any>{
    return this.http.delete(api);
  }

  putData(api:string, data:any):Observable<any>{
    return this.http.put(api,  data);
  }
}
