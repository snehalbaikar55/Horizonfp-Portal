import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partner-slider',
  templateUrl: './partner-slider.component.html',
  styleUrls: ['./partner-slider.component.css']
})
export class PartnerSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    margin:10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
}
