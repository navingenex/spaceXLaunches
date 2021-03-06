import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getLaunches(filter?: Object) {
    let parms = this.createStringParams(filter);
    return this.http
      .get(this.baseUrl, { params: parms })
      .pipe(map((response) => response));
  }
  /**
   * converting filter object into queryparams and returning to getLaunched function
   * @param  {Object} obj
   */
  private createStringParams(obj: Object): HttpParams {
    let params = new HttpParams();
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        params = params.append(key, obj[key]);
      }
    }
    return params;
  }
}
