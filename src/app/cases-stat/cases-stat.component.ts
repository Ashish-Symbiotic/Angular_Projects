import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";


@Component({
  selector: 'app-cases-stat',
  templateUrl: './cases-stat.component.html',
  styleUrls: ['./cases-stat.component.css']
})
export class CasesStatComponent implements OnInit {
  sess:any;
  dar:any;
  name:any;
  phone:any;
  data={};
  constructor(private ds:DataService) {
  }

  ngOnInit(): void {

  }
getdata()
{
  this.ds.geetPost().subscribe(res => {
    this.data=res;
    this.dar=res;
    console.log(this.dar[0].title);
   console.log(this.data);
  })
}
callme(item)

{
    console.log(item.value);
}


}
