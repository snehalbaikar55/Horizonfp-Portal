import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderhighlight]'
})
export class BorderhighlightDirective {

  constructor(private elementRef:ElementRef, private render:Renderer2) { }

  @HostBinding('style.border') border:string='none'
  
  
  @HostListener('mouseenter') mouseenterv(){
    this.border="0.1px solid black";
  }

  @HostListener('mouseleave') mouseleavev(){
    this.border="none";
  }

}
