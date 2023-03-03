import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-backoffers',
  templateUrl: './backoffers.component.html',
  styleUrls: ['./backoffers.component.css']
})
export class BackoffersComponent implements OnInit {

  bankimage:any=[]

  constructor(private dataservice:DataService,private route: ActivatedRoute,private router:Router) { }

  bankOptions: OwlOptions = {
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
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.bankimage=[
      {img:'assets/bank/axis.png',title:'Axis',irate:8},
      {img:'assets/bank/citi.png',title:'citi',irate:11},
      {img:'assets/bank/dhfl.png',title:'DHFL Home Loan',irate:11},
      {img:'assets/bank/HDFC.png',title:'HDFC',irate:6},
      {img:'assets/bank/indiabulls.png',title:'India Bulls',irate:7},
      // {img:'assets/bank/indianb.PNG',title:'Fitness Corner',irate:6},
      // {img:'assets/bank/lic.PNG',title:'Gym',irate:5},
      // {img:'assets/bank/pnbhou.PNG',title:'Party Lawn',irate:10},
      // {img:'assets/bank/statebi.PNG',title:'Library',irate:11},
      // {img:'assets/bank/tcl.PNG',title:'Library',irate:9},
      // {img:'assets/bank/uniun.PNG',title:'Library',irate:7},
      // {img:'assets/bank/hdfc.PNG',title:'HDFC',irate:4},
    ]
  }




}
