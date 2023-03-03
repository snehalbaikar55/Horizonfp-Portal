import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'owl.carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { trim } from 'jquery';

@Component({
  selector: 'app-bannerslider',                                                           
  templateUrl: './bannerslider.component.html',
  styleUrls: ['./bannerslider.component.css']
})
export class BannersliderComponent implements OnInit {
  data :any;
  locationData:any;
  selectedLocation:any;
  router: any;
  keyword = 'PropertyName';
  Projectname:any;
  constructor(private dataservice:DataService,private route:Router,private activatedRoute:ActivatedRoute) { }
  aa:any="selected";
  ngOnInit(): void {
    this.getlocation();
    this.selectedLocation="CT - Chembur";
    this.searchProjectbylocList(this.selectedLocation);
  }

  localities:string="";

  getlocation(){
    this.dataservice.getLocation().subscribe(res=>{
      this.locationData=res;
     // console.log(this.locationData);
    })
  }
    
    onChange(event:any){
      this.selectedLocation=event.target.value;
        this.searchProjectbylocList(this.selectedLocation);
      }

      searchProjectbylocList(data1:any){
        //alert("ang response:"+data1);
        this.dataservice.serchProjectbylocSer(trim(data1)).subscribe(res=>{
         // console.log("ang response:"+data1);
          this.Projectname=res;
         //alert('res'+res)
          
        })
      }
  onClick(){
    this.data = [this.selectedLocation,this.localities];
   // console.log(this.data);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          frontdata: this.data
        }
      };
      this.route.navigate(['/searchPage'], navigationExtras);
      
  }
  //banner slider
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  
 
selectEvent(e:any) {
 
  this.localities=e;
  //alert(e)
  let array:any = [];  
  for(let key in e){  
    if(e.hasOwnProperty(key)){  
      array.push(e[key]);  
    }  
   }  
   this.localities=array[2];
 //alert(array[2])
}
  onFocused(e:any){
    
  }
  onChangeSearch(item:any){
  
  }
}
