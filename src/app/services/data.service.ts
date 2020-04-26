import {Http, Headers, RequestOptions, Response} from'@angular/http';
import { Datac } from '../datac';
import { UserReg } from '../user-reg';
import { Flat} from '../flat';
import { Image } from '../image';
import { Aadhar } from '../aadhar';

import'rxjs/add/operator/map';
import'rxjs/add/operator/do';
import {Observable}from'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
user1:UserReg[];




  constructor(private _http:Http) { }
  checkloginFormServer(username:String,pass:String):Observable<Datac[]>{
  console.log(username,pass);
	return this._http.post("api/checklogin",{username,pass})
	.map(response=><Datac[]>response.json())
	.do(data=>console.log(JSON.stringify(data)));
}



insertreg(uname:String,type1:String,username:String,email:String,address:String,phone:number,aadhar:number,city:String){
  console.log(username,email);
	return this._http.post("api/insert",{uname,type1,username,email,address,phone,aadhar,city})
	.map(response=>this.user1 = response.json())
	.do(data=>console.log(JSON.stringify(this.user1)));
}



insertimage(imageurl:any):Observable<Image[]>{
	console.log(imageurl+"This is image url");
	return this._http.post("api/ini",{imageurl}).map(response=><Image[]>response.json());

}



checkadminlogin(username:string,password:string):Observable<Datac[]>{
	console.log(username,password);
	return this._http.post("api/checkadminlogin",{username,password})
	.map(response =><Datac[]>response.json())
	.do(data=>console.log(JSON.stringify(data)));
}



aadhar(aadhar:String):Observable<Aadhar[]>{
	return this._http.post("api/aadhar",{aadhar}).map(response=><Aadhar[]>response.json());
}



getAllDetails():Observable<Flat[]>{
	return this._http.post('api/getall',{} ).map(res => <Flat[]>res.json());
}

serchkey(key:string):Observable<Flat[]>{
	return this._http.post('api/search',{key}).map(res=> <Flat[]> res.json());
}


serchdata(dat:string):Observable<Flat[]>{
	return this._http.post('api/searchdat',{dat}).map(res => <Flat[]>res.json());
}
serchdata1(all:string):Observable<Flat[]>{
	return this._http.post('api/searchdat1',{all}).map(res => <Flat[]>res.json());
}

}
