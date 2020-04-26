import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Datac } from '../datac';
import { Router} from '@angular/router';
@Component({
  selector: 'loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{
ngModel:any={};
  log(x)
  {
    console.log(x);
  }
    constructor(private test:DataService,private router:Router) { }
  submit(f,e)
  {
    f.value;
    console.log(f.value);
    var username = e.target.elements[0].value;
  var pass = e.target.elements[1].value;
    
    this.test.checkloginFormServer(username,pass)
      .subscribe(data=>{
        
      if (data.length==0){
          

        alert("error login");
      
      }
      else
      {
      
      this.router.navigate(['/Rent']);
            }
      });

  }

  ngOnInit(){

  }
}
