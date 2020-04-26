import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Datac } from '../datac';
import { Router} from '@angular/router';
@Component({
  selector: 'ownerregis',
  templateUrl: './ownerregis.component.html',
  styleUrls: ['./ownerregis.component.css']
})
export class OwnerregisComponent {
   type:String;
constructor(private test:DataService,private router:Router) { }

radio(event)
{
  this.type=event.target.value;
}
  log(x)
  {
    console.log(x);
  }
  log2(y)
  {
    console.log(y);
  }
  log3(z)
  {
    console.log(z);
  }
  log4(a)
  {
    console.log(a);
  }
  log5(b)
  {
    console.log(b);
  }
  log6(d)
  {
    console.log(d);
  }
  submit(f,e)
  {
    f.value;
    
    var uname = e.target.elements[2].value;
    var username = e.target.elements[3].value;
    var email = e.target.elements[4].value;
    var address = e.target.elements[5].value;
    var phone = e.target.elements[6].value;
    var aadhar = e.target.elements[7].value;
    var city = e.target.elements[8].value;

    
    console.log("Type " + this.type);
    console.log("uname " + uname);
    console.log("usernmae " + username);
    console.log("email " + email);
    console.log("address " + address);
    console.log("phone " + phone);
    console.log("aadahar " + aadhar);

    this.test.insertreg(uname,this.type,username,email,address,phone,aadhar,city)
      .subscribe(data=>{
      if (data.length!==0){alert("error in Signup");
      
      }
      else
      {
        alert("signup SuccessFull");
      this.router.navigate(['']);

            }
      });

  }

  keyPress1(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
         }
    else
    {
      var aadhar;
      aadhar= event.target.value
      if (aadhar.length < 12){
        
      }
        else if (aadhar.length == 12)
      {

      this.test.aadhar(aadhar).subscribe(data=>{

          if(data.length == 0)
          {
            alert("Not a valid aadhar");
          }
          else
          {
            alert("Sucess");
          }
      });
      }
      else
      {

      }

    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
}

}
