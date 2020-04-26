import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Datac } from '../datac';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-propertydeatils',
  templateUrl: './propertydeatils.component.html',
  styleUrls: ['./propertydeatils.component.css']
  })
export class PropertydeatilsComponent {
id:any;
 ngModel:any={};
  log(x)
  {
    console.log(x);
  }
	    constructor(private test:DataService,private router:Router, private route:ActivatedRoute) { 
this.id=this.route.snapshot.params.id;
console.log(this.id);
      }
  submit(f)
  {
    f.value;
    console.log(f.value);
  }

}
