import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  userReview:any=[]

  constructor() { }

  ngOnInit(): void {
    this.userReview=[
      {name:'Rahul Kadam',review:'Good place to find most affortable plots and new homes for family, Thanks',rating:'2',img:'mentwo.jpg'},
      {name:'Rahan Kadam',review:'Good for interns IT and Digital Marketing.',rating:'4',img:'menthree.jpg'},
      {name:'Rashan Kadam',review:'Good for plots',rating:'5',img:'menfour.jpg'},
      {name:'Sushil Kadam',review:'Big inverstment with good price',rating:'4',img:'menfive.jpg'},
      {name:'Prakash Kadam',review:'Good one property dealer',rating:'1',img:'mensix.jpg'},
      {name:'Om Kadam',review:'Good property dealer',rating:'3',img:'menseven.jpg'},
    ]
  }


  customerOptions: OwlOptions = {
    // autoplay:true,
    loop: true,
    margin:20,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<div class='nav-btn prev-slide hf-hor-prev'><i class='fa fa-arrow-left hf-deal-padd-top ' aria-hidden='true'></i></div>","<div class='nav-btn next-slide hf-hor-next'><i class='fa fa-arrow-right hf-deal-padd-top' aria-hidden='true'></i></div>"],
  
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4.2
      }
    },
    nav: true
  }

}
