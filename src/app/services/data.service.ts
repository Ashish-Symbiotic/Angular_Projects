import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Datac } from '../datac';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  corsHeaders: HttpHeaders;

  constructor(public http : HttpClient) {

  }
  geetPost():Observable<Datac[]>{
   return  this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(data =><Datac[]>data));
  }

}
