import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Datac } from '../datac';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 ngModel:any={};
  log(x)
  {
    console.log(x);
  }
    constructor( private test:DataService,private router:Router) {  }
  submit(f,e)
  {
    f.value;
    console.log(f.value);
    var username = e.target.elements[0].value;
  var pass = e.target.elements[1].value;
    
    this.test.checkadminlogin(username,pass).subscribe(data=>{
    	if (data.length==0){alert("error login");
      
      }
      else
      {
      this.router.navigate(['adminmain']);
      localStorage.setItem('currentuser',data[0].flag);
      console.log(localStorage.getItem('currentuser')+"Login wale se ");

            }
      });
   
  }

  ngOnInit() {
    if(localStorage.getItem('currentuser') !== "admin"){
      this.router.navigate(['adminLogin']);

    }
    else{
      console.log(localStorage.getItem('currentuser'));

      this.router.navigate(['adminmain']);

      }
     
    }
  }


