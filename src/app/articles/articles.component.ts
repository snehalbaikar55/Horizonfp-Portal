import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  plotArticals:any=[]

  constructor() { }

  ngOnInit(): void {
    this.plotArticals=[
      {heading:'Sebi slaps Rs 40 lakh fine on Shri Ram Real Estate, six individuals',decription:'New Delhi, Feb 9 () Markets regulator Sebi has imposed a Rs 40 lakh fine on Shri Ram Real Estate & Business Solutions and six individuals for illegally raising funds from the public through collective investment schemes.',img:'pthree.jpg',by:'bpa news'},
      {heading:'Cidco collects Rs 386 crore from selling 10 plots in Navi Mumbai',decription:'The authority on Tuesday netted another Rs 157 crore from the remaining five plots, which was more than double the base price.',img:'pfour.jpg',by:'tv11 news'},
      {heading:'Hyderabad development body to e-auction over 120 plots',decription:'In April this year, HMDA held auctions for 67 plots in Uppal Bhagat phase I which fetched Rs 670 crore.',img:'pfive.jpg',by:'Tee news'},
      {heading:'Noida: Over 480 residential plots up for bids from November 15',decription:'These are vacant, unsold or defaulter recovered plots in different sizes of 100 to 500 sqms that have been remained unsold so far.',img:'psix.jpg',by:'kal news'},
      {heading:'Haryana CM to waive interest on outstanding property tax amounts',decription:'Besides, giving relief to the property tax payers in the state, he also announced to extend the date for depositing property tax in urban estates along with 10 per rebate up to December 31',img:'pseven.jpg',by:'m news'},
      {heading:'Karnataka government eases rules for big-ticket realty projects',decription:'The previous ceiling was 12,000sqm (nearly 3 acres). This is a sanction that was obtained from the BDA, which checks to see, among other things, if the layout has earmarked spaces for a',img:'peight.jpg',by:'city news'},
     
    ]
  }


  articlesOptions: OwlOptions = {
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
        items: 3.2
      }
    },
    nav: true
  }

}
