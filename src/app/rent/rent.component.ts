import { Component, OnInit } from '@angular/core';
import { Flat } from '../flat';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

data:string;
products:any;
product1:any;

  constructor(private test:DataService,private router:Router) { 

  }

  ngOnInit() {
this.test.serchdata1('all').subscribe(data => {this.product1=data;
if(data.length==0)
{
}} );

  }
search_value(e){

this.data=e.target.value;
if(this.data != "" ){
this.test.serchkey(this.data).subscribe(data =>{
  	this.products=data;
  	console.log(data.length+"serch ");
  }  );

}
  else
  {
  	this.test.serchdata1('all').subscribe(data => {this.product1=data});

  }
  
}
search_text(e)
{

this.data=e;
if(this.data.length!=0)
{
	this.test.serchdata(this.data).subscribe(data => {this.product1=data;
if(data.length==0){
	alert("No data found ");
}


} );
}
else
{
this.test.serchdata1('all').subscribe(data => {this.product1=data});	
}
}
getD(id:string)
{
	console.log(id);
	this.router.navigate(['/prop'+id]);
}
}
