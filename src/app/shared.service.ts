import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getLaunches(filter?: string) {
    return this.http
      .get('./assets/launches.json')
      .pipe(map((response) => response));
  }
}
