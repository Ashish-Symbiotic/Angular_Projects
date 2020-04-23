import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
name:string="Radhey Shyam";
age:number;
visible=true ;
address:Address;
hobbies:string[];
  constructor() {
    console.log("Jai Mata Di");
   }

  ngOnInit(): void {
    console.log("Jai ho");
    this.name="Jai Mata di";
    this.age=45;
    this.address={
      street:"This is my Street",
      city:"Delhi",
    state:"Ed"
    }
    this.hobbies=['THis is my hobbies', 'This is not my hobbies'];
  }
ClickFunc(){
  console.log("This name is changed");
  alert("Hello Button is Clicked");
  this.name="Jai Mata Di";
  this.visible=!this.visible;

  this.hobbies.push("gamming");
}
addHobby(hobby:string)
{
  this.hobbies.unshift(hobby);

  return false;

}
DeleteHobbies(er:any)
{
    for(let i=0;i<this.hobbies.length;i++)
    {
      if(this.hobbies[i] ==  er)
      {
        this.hobbies.splice(i,1);
      }
    }
}


}
interface Address
{
  street:string,
  city:string,
  state:string
}
