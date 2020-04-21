import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
name:string="Radhey Shyam";
age:number;
address:{
  street:string,
  city:string,
  state:string
};
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
  

}
