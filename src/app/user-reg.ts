export class UserReg {
	username:string;
	email:string;
	address:string;
	phone:number;
	aadhar:number;
	city:string;
	type:string;
	uname:string;
	
	constructor(type:string,uname:string,username:string, email:string,address:string,phone:number,aadhar:number,city:string){
		this.username=username;
		this.email=email;
		this.address=address;
		this.phone=phone;
		this.aadhar=aadhar;
		this.city=city;
		this.uname=uname;
		this.type=type;
	}	

}
