import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(products: any, acoomodation: string): any {
  	console.log(acoomodation);
    if(products && products.length){
    	return products.filter(item =>{
    		if(acoomodation && item.type.toLowerCase().indexOf(acoomodation.toLowerCase()) === -1){
    			console.log("reached")
    			return false;
    		}
    	})
    }else{
    	return products;
    }
  }

}
