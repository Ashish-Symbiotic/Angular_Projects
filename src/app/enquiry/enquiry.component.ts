import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {

 enquiryform=new FormGroup({
  userName:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  phoneno:new FormControl('',[
  Validators.required,
  Validators.minLength(10)
  ]),
  city:new FormControl('',Validators.required)
  });
  get username(){
  return this.enquiryform.get('userName');
  }
  get email()
  {
    return this.enquiryform.get('email');
  }
  get phoneno()
  {
    return this.enquiryform.get('phoneno');
  }
  get city()
  {
    return this.enquiryform.get('city');
  }
  submit(f)
  {
    f.value
  }

}
