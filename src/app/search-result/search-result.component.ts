import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { style } from '@angular/animations';
import { FormGroup, FormBuilder, FormArray, FormControl, CheckboxControlValueAccessor } from '@angular/forms';
import { SearchResult } from './searchresult.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavigationExtras } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LabelType, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  disabled = true;
  minValue: any = 10;
  maxValue: any = 100;
  options: Options = {
    floor: 2,
    ceil: 100,
    // step: 5,
    showTicks: true,
    animate: true,
    translate: (value: number, label: LabelType): any => {
      switch (label) {
        case LabelType.Low:
          if (value.toString().length==3){
            return "<b>Max price:</b> Rs " + value/100+" Cr";
          }else{
            return "<b>Max price:</b> Rs " + value+" L";
          }
        case LabelType.High:
          if (value.toString().length==3){
            return "<b>Max price:</b> Rs " + value/100+" Cr";
          }else{
            return "<b>Max price:</b> Rs " + value+" L";
          }
          
        default:
          // return "Rs " + value+" Cr";
      }
    }
  };
  p:any;
  propertyData: any;
  private sub: any;
  searchResult=new SearchResult; 
  i:number=0;
  constructionStatus: any;
  errortemplate:any;
  dynamicData:SafeHtml | undefined;
  bhk_search="";
  conTypesearch="";
  protypesearch="";
  searchbyloc=""
  bhkvalue=['1','1.5','2','2.5','3','3.5 ','4','5'];
  bgetvalue=['20 Lacs - 35 Lacs','35 Lacs 45 Lacs','45 Lacs - 55 Lacs','55 Lacs - 65 Lacs','65 Lacs - 75 Lacs','75 Lacs - 85 Lacs','85 Lacs - 95 Lacs','95 Lacs-1 Cr','1 Cr-2 Cr','2 Cr-3 Cr','3 Cr-4 Cr','4 Cr-5 Cr','5 Cr-10 Cr','10+ Cr'];
  protype=['Residential Aprtments','Commercial Aprtments'];
  conType=["New Project","Ready To Move","Under Construction"];
  public isReadMore:boolean = true;
  propid:number | undefined;
  projson: any[] = [];
  constjson= [];
  public conobj_true:any[]=[];
  propertyData1: any;
  status:boolean=false;
  price: any;
  numprice: any[] = [];
  frontloc: any;
  autocompleteItemsAsObjects: any;
  price1: any;
  conTypesearch1: any;
   
  dummy: any;
  pricerange: any[] = [];
  filterdata: any;
  city: any;
  bhk:any;
  developer:any;
  construct: any;

  constructor(
    private dataservice:DataService,private router:Router,private route: ActivatedRoute,private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    
    this.wordwrap();

    this.city = this.route.snapshot.paramMap.get('city');
    this.bhk=this.route.snapshot.paramMap.get('bhk');
    this.developer=this.route.snapshot.paramMap.get('developer');
    this.construct=this.route.snapshot.paramMap.get('construct');

    if(this.city){
    this.show_property_by_city(this.city);
    }
    if(this.bhk){
      this.show_property_by_bhk(this.bhk);
    }
    if(this.developer){
      this.show_property_by_developername(this.developer);
    }
    if(this.construct){
      this.search_by_construction_type(this.construct);
    }


    this.sub = this.route.queryParams.subscribe(params => {

          let data = params;
          let object = Object.keys(data);
          // if(object[0] == 'constructdata'){
          //   this.searchByConstructionStatus();
          // }
          if(object[0] == 'property'){
            this.searchByPropType();
          }  
          if(object[0] == 'frontdata'){
            this.getUrllocData();
          }  
          if(object[0] == 'alldata'){
            this.getalldata();
          }  
          
      })
     
    
      this.getprice();
    }
  getprice(){
      this.dataservice.listallrpriceService().subscribe(res=>{
        this.price=res; 
      });
    }
  getalldata(){
    this.dataservice.getalldataser().subscribe(res=>{
      this.propertyData1 = res;
      // create because to avoid duplicate records
      this.propertyData=Object.values(this.propertyData1.reduce((acc: any,cur: { PropertyID: any; })=>Object.assign(acc,{[cur.PropertyID]:cur}),{}))
      //console.log(this.propertyData);
      this.projson=this.propertyData;
      //var x=this.projson;
    
      for(let j=0;j<this.projson.length;j++){

        let constCount = 0;
        var conobj=JSON.parse(this.projson[j].ConStatus);
        for(let ob of conobj){
          if(ob.checked==true){
            constCount++;
            this.conobj_true.push(ob.name);
            //console.log(this.conobj_true);
          }
        }
        
      }
     // console.log(this.conobj_true);
      
    });
    
  }
  getUrllocData(){

    this.sub = this.route.queryParams.subscribe(params => {
      let data = params['frontdata'];
      //console.log(data);
      this.dataservice.sendSearchData(data).subscribe(res=>{
        //console.log('res',res)
        this.propertyData = res;
        //console.log("front==="+this.propertyData);
        this.projson=this.propertyData;
      // console.log(this.projson[0].ConStatus);
      // this.constjson=this.projson[0].ConStatus;
      var x=this.projson;
      // this.constructiontype=this.constjson;
      
      
      console.log(x.length);
      for(let j=0;j<x.length;j++){
        this.constjson=this.projson[j].ConStatus;
        var conobj=JSON.parse(this.projson[j].ConStatus);
        for(let i=0;i<conobj.length;i++){
          if(conobj[i].checked==true){
            //console.log("hi my json",conobj[i].name,"=",conobj[i].checked);
            this.conobj_true[i]=conobj[i].name;
          }
        }
      }
        
      })
    });
   }
   search_by_construction_type(construct:any){
    this.dataservice.searchByConstructionStatusSer(construct).subscribe(res=>{
      this.propertyData1 = res;
        this.propertyData=Object.values(this.propertyData1.reduce((acc: any,cur: { PropertyID: any; })=>Object.assign(acc,{[cur.PropertyID]:cur}),{}))

    })
   }
  //  searchByConstructionStatus(){
  //   this.sub = this.route.queryParams.subscribe(params => {
  //     let data = params['constructdata'];
  //     //alert('value:++++++++++++++++++++++++'+data);
  //     //console.log('construvalue:',data);
  //     this.dataservice.searchByConstructionStatusSer(data).subscribe(res=>{
  //       this.propertyData1 = res;
  //       this.propertyData=Object.values(this.propertyData1.reduce((acc: any,cur: { PropertyID: any; })=>Object.assign(acc,{[cur.PropertyID]:cur}),{}))

        
  //     // console.log("constructiondata"+JSON.stringify(res));
  //     })
  //   });
  //  }
   searchByPropType(){
    this.sub = this.route.queryParams.subscribe(params => {
      let data = params['property'];
      
      this.dataservice.searchByProperTypeSer(data).subscribe(res=>{
        this.propertyData = res;
        //console.log("newlaunch:"+JSON.stringify(res));
        if(res==0||res==null){
          this.dynamicData = this.sanitizer.bypassSecurityTrustHtml(`<div class="alert alert-primary" role="alert">
          <h4 class="alert-heading">No Data Found!</h4>
          <p>Please Search with another Keywords</p>
          <hr>
          <p class="mb-0">Thank you!</p>
        </div>`);
        }
      })
    });
   }
   onCheckboxChange(e:any) {
   
    if (e.target.checked) {
      
      this.bhk_search=e.target.value;
      //console.log(this.bhk_search);
    } 
  }
  selectedIndex:number | undefined;
  onCheckboxChangeconstruction(e:any) {
    const list = [];
    if (e.target.checked) {
       //alert(e.target.value)
      // this.selectedIndex=e.target.i?i:undefined;
      this.conTypesearch1 = e.target.value;
      if(this.conTypesearch1=='')
      {
        return this.propertyData;
      }
      else
      {
        if(this.conTypesearch1)
        {
              for (const pdatta of this.propertyData) {
                if(pdatta.ConStatus)
                {
                  for(let status of JSON.parse(pdatta.ConStatus))
                  {
                            if(status.name==this.conTypesearch1 &&status.checked==true)
                            {
                              (list).push(pdatta);
                              this.propertyData=list;
                              
                            }
                  }//end for
                }//end if
              }//end for
        }//end for
      }
    }
    else
    {
      this.getalldata();
      
    }
  
  }
  onCheckboxChangeProp(e:any)
  {
    if (e.target.checked) {
      
      this.protypesearch=e.target.value;
      //console.log(this.bhk_search);
    } 
  }
  onclickclearfilter()
  {
    let currentUrl = this.route.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]); 
  }
  wordwrap()
    {
        var maxLength = 100;
        $(".hf-our-txt-2").each(function(){
            var myStr = $(this).text();
            if($.trim(myStr).length > maxLength){
                var newStr = myStr.substring(0, maxLength);
                var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
                $(this).empty().html(newStr);
                $(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
               // $(this).append('<span class="more-text">' + removedStr + '</span>');
            }
        });
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

onClickdrp()
{
  this.status = !this.status;  
  // this.status=true;
  
}
onchangeminprice(event:any){
  this.minValue=event.target.value;
  console.log("min value"+this.minValue);
}
onchangemaxprice(event:any){
  this.maxValue=event.target.value;
  console.log("max value"+this.maxValue);
}

// for input tag event
ontagSelect(item:any){
    console.log('tag selected: value is ' + item);
}


getpropertyByPriceFilter(){
  this.pricerange=[this.minValue,this.maxValue]
  // alert(this.pricerange)
}
onpricefilter(e:any){

  this.pricerange=[this.minValue,this.maxValue]
  this.dataservice.filterDataByPriceRangeSer(this.pricerange).subscribe(res=>{
    this.filterdata=res;
    this.propertyData=this.filterdata
  })
}



onClickproid(x:any){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      propertyid: x
    }
  };
  this.router.navigate(['/singlePage/x'], navigationExtras);
}

show_property_by_city(cityname:any){
  this.dataservice.searchcitybynameSer(cityname).subscribe(res=>{
    this.propertyData=res;
  })
}
show_property_by_bhk(bhk:any){
  this.dataservice.searchbhkbynameSer(bhk).subscribe(res=>{
    this.propertyData=res;
  })
}

show_property_by_developername(developername:any){
  this.dataservice.listByProperbydevaloperSer(developername).subscribe(res=>{
    this.propertyData=res;
  })
}
onChangeLocation(event:any){
  this.dataservice.search_prop_by_location_Ser(event.target.value).subscribe(res=>{
    this.propertyData=res;
  })
}
}
