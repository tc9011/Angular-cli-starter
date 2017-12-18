import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public getData(api:string):Observable<any>{
    return this.http.get(api);
  }

  public postData(api:string, data:any):Observable<any>{
    return this.http.post(api, data);
  }

  public deleteData(api:string):Observable<any>{
    return this.http.delete(api);
  }

  public putData(api:string, data:any):Observable<any>{
    return this.http.put(api,  data);
  }
}
