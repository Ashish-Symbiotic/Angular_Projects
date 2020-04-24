import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  corsHeaders: HttpHeaders;

  constructor(public http : HttpClient) {

  }
  geetPost(){
   return  this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
