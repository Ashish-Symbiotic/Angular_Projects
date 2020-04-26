import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
declare var jquery:any;
declare var $ :any;
import { Router} from '@angular/router';
import { DataService } from '../services/data.service'

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  constructor(private test:DataService,private router:Router) { }
  imageUrl:string ="../../assets/images/ss.png";
  fileToUpload : File = null;
  data:any;
  products:any;
  post=new FormGroup({
  ownername:new FormControl('',Validators.required),
  address:new FormControl('',[
  Validators.required,
  Validators.minLength(5),
]),
})
location=[
 {id:1,name:'Laxmi Nagar'},
 {id:2,name:'Mukherjee Nagar'},
 {id:3,name:'Pitampura'},
 {id:4,name:'Rithala'},
 {id:5,name:'Rajouri Garden'},
 {id:6,name:'Dwarka'},
 {id:7,name:'Uttam Nagar'},
 {id:8,name:'Greater Kalash'},
 {id:9,name:'Shahdara'},
 {id:10,name:'Rohini'},
]

kitchen=[
 {id:1,name:'1'},
 {id:2,name:'2'},
 {id:3,name:'3'},
 {id:4,name:'4'},
 {id:5,name:'5'},
 {id:6,name:'6'},
 {id:7,name:'7'},
 {id:8,name:'8'},
 {id:9,name:'9'},
 {id:10,name:'10'},
]

bathroom=[
 {id:1,name:'1'},
 {id:2,name:'2'},
 {id:3,name:'3'},
 {id:4,name:'4'},
 {id:5,name:'5'},
 {id:6,name:'6'},
 {id:7,name:'7'},
 {id:8,name:'8'},
 {id:9,name:'9'},
 {id:10,name:'10'},
]

floor=[
 {id:1,name:'1'},
 {id:2,name:'2'},
 {id:3,name:'3'},
 {id:4,name:'4'},
 {id:5,name:'5'},
 {id:6,name:'6'},
 {id:7,name:'7'},
 {id:8,name:'8'},
 {id:9,name:'9'},
 {id:10,name:'10'},
]

  get ownername(){
    return this.post.get('ownername');
  }
  get address()
  {
      return this.post.get('address');
  }
    submit(f,e)
    {
      f.value
    }

ngOnInit(){
    $(document).ready(function(){
      $("#flr").hide();
      $("#wholehouse").hide();
    $("#wh").click(function(){
        $("#flr").hide();
        $("#wholehouse").show();
        
        
    });
    $("#fl").click(function(){
        $("#wholehouse").hide();
        $("#flr").show();
    });
});
}
handlefile(file:FileList){
  this.fileToUpload= file.item(0);
  var reader=new FileReader();
  reader.onload = (event:any) =>{
    this.imageUrl=event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);

}
uploadpic(e:any)
{
this.test.insertimage(e)
      .subscribe(data=>{
      if (data.length==0){alert("error in Signup");
      
      }
      else
      {
      this.router.navigate(['']);

            }
      });

}

}
