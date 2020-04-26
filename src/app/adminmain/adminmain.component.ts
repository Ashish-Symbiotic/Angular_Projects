import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  constructor(private route:Router) { }
routey(){
	this.route.navigate(['/listusers']);

}

adminLogout(){
	
  localStorage.removeItem("currentUser");
	this.route.navigate(['adminLogin']);
  console.log("logout called");
  console.log( localStorage.getItem("currentUser")+ "Log out se ");
  
}
  ngOnInit() {
  	if(localStorage.getItem("currentuser") == "admin"){
      alert("Hello");
    }
    else{
      this.route.navigate(['adminLogin']);
      console.log("ADMIN MAIN SE ");
    }
  }

}
