import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import{ReducelengthPipe} from 'src/app/search-result/reducelength.pipe'
import { DataService } from '../services/data.service';
import { BannersliderComponent } from '../bannerslider/bannerslider.component';
import { ReducelengthPipe } from '../search-result/reducelength.pipe';
//import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newproject:string="New Project";
  readytomove:any="Ready To Move";
  underConstruction:any="Under Construction";
  commercial:any="Commercial Aprtments";
  residential:any="Residential Aprtments";
  villa:any="Residential Villa"
  x:any="";
  alldata=""
  mumbaiprojectdata:any=[];
  mumbaitopprojectdata: any;


  constructor(private dataservice:DataService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //AOS.init();
    this.showallProjectMumbai();
    this.showalltopProjectMumbai();
  }
  viewMumbaiProp(){
   this.router.navigate(['/searchPage']);
  }
  
  onClicksearchByConsStatus(x:any){
    
      
    //  console.log(x)

      let navigationExtras: NavigationExtras = {
        queryParams: {
          constructdata: x
        }
      };
      this.router.navigate(['/searchPage'], navigationExtras);
    

}
onClickproid(x:any){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      propertyid: x
    }
  };
  this.router.navigate(['/singlePage/x'], navigationExtras);
}
  onClickSearchByProp(x:any){
    //console.log(x);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        property: x
      }
    };
    this.router.navigate(['/searchPage'], navigationExtras);
  }
  onclickPropall(x:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        alldata: x
      }
    };
    this.router.navigate(['/searchPage'], navigationExtras);
  }
  onclicktopPropall(x:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        topProMum: x
      }
    };
    this.router.navigate(['/singlePage/x'], navigationExtras);
  }
  showallProjectMumbai(){
    this.dataservice.topProMumbaiSer().subscribe(res=>{
      this.mumbaiprojectdata = res;
      //console.log("mumbai project",this.mumbaiprojectdata);
     
    })
  }
  showalltopProjectMumbai(){
    this.dataservice.topNewProMumbaiSer().subscribe(res=>{
      this.mumbaitopprojectdata = res;
      //console.log("mumbai project",this.mumbaiprojectdata);
     
    })
  }
}
