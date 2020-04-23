import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  constructor(element : ElementRef) {
    element.nativeElement.style.color="RED";
   }
   @HostListener ('click') onRedListener()
   {
     console.log("This is new Listener ");
   }
   @HostListener('mouseenter') whenmouse()
   {
     console.log("Is shows when Mouse Enters");
   }

}
