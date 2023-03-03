import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-singla-page',
  templateUrl: './singla-page.component.html',
  styleUrls: ['./singla-page.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class SinglaPageComponent implements OnInit {
  id: number | undefined;
event:any;
public logMenuLoad = false;
public loadAbt = false;
public loadfloorplan = false;
public loaddata:any;
public loadfirstimg:any;
public loadgallimgdata:any;
public index:any = 1;
//public i:any=1 ;
singleimg:any;
sideimg1:any;
sideimg2:any;
mapdata:SafeHtml | undefined;
isFirst:boolean=false;

public showid:any;
  loadfloorplandata: any;
  

  constructor(@Inject(DOCUMENT) document:any,private dataservice:DataService,private route: ActivatedRoute,private el:ElementRef,private sanitizer: DomSanitizer) { }

  public sub:any;
  loadAllLogMenu(){
    this.logMenuLoad = true;
  }
  loadAbtsection(){
    this.loadAbt =true;
  }
  loadfloorplansection(){
    this.loadfloorplan =true;
  }
  
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // console.log("prop id********"+this.id);
    // this.loaddatabyID(this.id);
    this.sub = this.route.queryParams.subscribe(params => {
      var data = params;
  
      //this.showid=JSON.stringify(data);
      let object1 = Object.keys(data);
      let object = Object.values(data);
      //id for single page routing
      this.showid="?"+object1[0]+"="+object[0]+"#";
      //console.log(object[0]);
      //console.log("*****"+this.showid);

      //display data by property id
      this.loaddatabyID(object[0]);

      //display gallay images by property id
      this.loadgallaryimg(object[0]);

      //display floor plans
      this.loadfloorplanfun(object[0]);
    })

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any) {
     if (window.pageYOffset > 750) {
     
       var element:any = document.getElementById('hfsticky');
       element.classList.add('sticky');
     
     } else {
      let element:any = document.getElementById('hfsticky');
       element.classList.remove('sticky'); 
      
     }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScrollside(e:any) {
    if (window.pageYOffset > 1000) {
    
      var side:any=document.getElementById('hf-sidebar-sticky');
      side.classList.add('stickysidebar');
    } else {
   
      var side:any=document.getElementById('hf-sidebar-sticky');
      side.classList.remove('stickysidebar');
    }
 }
  onClickbtline(event: any){  
    var element:any = document.getElementsByClassName('dragContent');
       element.classList.add('active');
  }
  loaddatabyID(d:any)
  {
    this.dataservice.loaddatabyidser(d).subscribe(res=>{
      this.loaddata = res;
      this.mapdata=this.sanitizer.bypassSecurityTrustHtml(this.loaddata[0].URL) ;
    //  console.log("map data "+this.mapdata);
      
     // console.log("loadbyid"+JSON.stringify(res));
    })
  }
  loadgallaryimg(d:any){
    this.dataservice.loadgallaryimgser(d).subscribe(res=>{
      this.loadgallimgdata = res;
      this.singleimg=this.loadgallimgdata[0].FeaturedImage;
      this.sideimg1=this.loadgallimgdata[2].FeaturedImage;
      this.sideimg2=this.loadgallimgdata[1].FeaturedImage;
    //  console.log("image path"+this.singleimg);
    // console.log("loadgallaryimgser"+res);
    })
  }
  loadfloorplanfun(d:any){
    this.dataservice.loadfloorplanser(d).subscribe(res=>{
      this.loadfloorplandata = res;
      //console.log("Flooor plan",JSON.stringify(this.loadfloorplandata));
     
    })
  }
 
}
