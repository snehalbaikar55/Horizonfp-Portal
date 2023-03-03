import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppImg]'
})
export class AppImgDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')
  imageChange(){
    var src:any=this.el.nativeElement.src;
    var prev:any=document.getElementById("preview");
    prev.src=src;
    var hfimgslide=document.getElementsByClassName("hf-img-slide");
    for(let i=0;i<hfimgslide.length;i++){
      hfimgslide[i].classList.remove("imgactive");
    }
    this.el.nativeElement.parentElement.classList.add("imgactive");
    
  }

}
