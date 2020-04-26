import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService  } from '../services/data.service';
import { Flat } from '../flat';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
obj1;obj2;obj3;
user:Flat[];
  constructor(private route:Router,private Data:DataService) { 
this.obj1 = new Flat ("sonu");
this.obj2 = new  Flat ("Moksh");
this.obj3 = new Flat ("Sonu2");
console.log(this.user);

  }
  ngOnInit() {
  	/*this.Data.getAllDetails().subscribe(data => {
  		if(data.length==0)
  		{
  			alert("No data Found");
  		}
  		else
  		{

  		}
  	})*/
  }

}
