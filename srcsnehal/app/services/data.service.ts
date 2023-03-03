import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loadfloorplanset: any;

  constructor(
    private HttpClient:HttpClient
  ) { }

  sendSearchData(data:any){
    return this.HttpClient.post('http://127.0.0.1:8000/api/searchDataFront',data);
  }
  serchProjectbylocSer(data:any){
    return this.HttpClient.get('http://127.0.0.1:8000/api/searchProjectByLoc/'+data);
  }
  getLocation(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/getLocation');
  }
  getalldataser(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/getalldata');
  }
  
  searchByConstructionStatusSer(data:any){
    return this.HttpClient.get('http://127.0.0.1:8000/api/searchByConstructionStatus/'+data);
  }
  searchByProperTypeSer(data:any){
    return this.HttpClient.get('http://127.0.0.1:8000/api/searchByPropType/'+data);
  }
  loaddatabyidser(data:any)
  {
    return this.HttpClient.get('http://127.0.0.1:8000/api/loaddatabyid/'+data);
  }

  loadgallaryimgser(data:any)
  {
    return this.HttpClient.get('http://127.0.0.1:8000/api/loadgallaryimg/'+data);
  }
  loadfloorplanser(data:any){
    return this.HttpClient.get('http://127.0.0.1:8000/api/loadfloorplans/'+data);
  }
  topProMumbaiSer(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/topProMumbai');
  }
  horizonbaseSer(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/horizonknwndbase');
  }
  topNewProMumbaiSer(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/topNewProMumbai');
  }
  emaildataSer(data:any){
    return this.HttpClient.post('http://127.0.0.1:8000/api/basic_email',data);
  }
  listByProperbydevaloperSer(data:any){
    return this.HttpClient.get('http://127.0.0.1:8000/api/listpropbydev/'+data);
  }
  listallrpriceService(){
    return this.HttpClient.get('http://127.0.0.1:8000/api/getprice');
  }
  filterDataByPriceRangeSer(data:any){
    return this.HttpClient.post('http://127.0.0.1:8000/api/filterDataByPriceRange',data);
  }
}
