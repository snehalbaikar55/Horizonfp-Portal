import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { DataService } from '../services/data.service';
// import { SearchResult } from './search-result';
import {NgxPaginationModule} from 'ngx-pagination';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-list-prop-by-developer',
  templateUrl: './list-prop-by-developer.component.html',
  styleUrls: ['./list-prop-by-developer.component.css']
})
export class ListPropByDeveloperComponent implements OnInit {
  p:any;
  developername:any;
  propertyData: any;
  propertyData1: any;
  // searchResult=new SearchResult; 
  constructor(private route: ActivatedRoute,private dataservice:DataService,private router:Router) {}

  ngOnInit(): void {
    this.developername = this.route.snapshot.paramMap.get('id')
    this.listpropertybydeveloper(this.developername);

    
  }
  listpropertybydeveloper(developername:any){
    console.log("list property by developer"+this.developername)
    this.dataservice.listByProperbydevaloperSer(this.developername).subscribe(res=>{
      this.propertyData1 = res;
      this.propertyData=Object.values(this.propertyData1.reduce((acc: any,cur: { PropertyID: any; })=>Object.assign(acc,{[cur.PropertyID]:cur}),{}))

      //console.log("list property by developer"+JSON.stringify(this.propertyData))
    })
  }
  mouseenterpropid(event:any){
    // alert(event)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        pid: event
      }
      
    };
    //console.log(JSON.stringify(navigationExtras));
    let obj=JSON.stringify(Object.values(navigationExtras));
    //console.log(obj);
    //let ob1=Object.values(obj);
    //console.log("bbj"+ob1);
    this.router.navigate(['/singlePage/pid'], navigationExtras);
  }
  //banner slider
 customOptions1: OwlOptions = {
  autoplay:true,
  loop: true,
  margin:25,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ["<div class='nav-btn1 prev-slide search-pre'><i class='fa fa-arrow-left hf-deal-padd-top' aria-hidden='true'></i></div>","<div class='nav-btn1 next-slide search-next'><i class='fa fa-arrow-right hf-deal-padd-top' aria-hidden='true'></i></div>"],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
  nav: true
}
  //banner slider
  customOptions2: OwlOptions = {
    autoplay:false,
    loop: true,
    margin:25,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<div class='nav-btn1 prev-slide search-pre'><i class='fa fa-arrow-left hf-deal-padd-top' aria-hidden='true'></i></div>","<div class='nav-btn1 next-slide search-next'><i class='fa fa-arrow-right hf-deal-padd-top' aria-hidden='true'></i></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
    //banner slider
 customOptions3: OwlOptions = {
  autoplay:false,
  loop: true,
  margin:25,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ["<div class='nav-btn1 prev-slide search-pre'><i class='fa fa-arrow-left hf-deal-padd-top' aria-hidden='true'></i></div>","<div class='nav-btn1 next-slide search-next'><i class='fa fa-arrow-right hf-deal-padd-top' aria-hidden='true'></i></div>"],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
  nav: true
}
}