import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-horizon-know-slider',
  templateUrl: './horizon-know-slider.component.html',
  styleUrls: ['./horizon-know-slider.component.css']
})
export class HorizonKnowSliderComponent implements OnInit {
  alldata="";
  horizonbasedata: any;
  horizonbasedata1: any;
  constructor(
    private dataservice:DataService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.horizonbase();
  }
 //banner slider
 customOptions: OwlOptions = {
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
      items: 4
    }
  },
  nav: true
}
onclickPropall(x:any){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      alldata: x
    }
  };
  this.router.navigate(['/singlePage/x'], navigationExtras);
}
horizonbase()
{
    this.dataservice.horizonbaseSer().subscribe((res)=>{
      this.horizonbasedata1 = res;
      this.horizonbasedata=Object.values(this.horizonbasedata1.reduce((acc: any,cur: { PropertyID: any; })=>Object.assign(acc,{[cur.PropertyID]:cur}),{}))
      //console.log("horizon"+JSON.stringify(this.horizonbasedata));
      
  });
}
}