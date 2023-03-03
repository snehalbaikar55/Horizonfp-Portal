import { Pipe, PipeTransform } from '@angular/core';
import { X } from 'Admin_angular/node_modules1/@firebase/firestore/dist/esm5/packages/firestore/dist/esm2017/prebuilt-038c95ef';

@Pipe({
  name: 'searchresult',
  pure: false
})
export class SearchresultPipe implements PipeTransform {
  listUsers: any;
  x:any;
  list:any=[];
  

  transform(items: any, bhk_search: string,conTypesearch:string,protypesearch:string,searchbyloc:string){
    
    if (items && items.length){
      
        return items.filter((item:any )=>{
          if (searchbyloc){
            
           return ( (JSON.stringify(item.PropertyName).toLowerCase().match(searchbyloc))||(JSON.stringify(item.Location).toLowerCase().match(searchbyloc)) );
          }
          if (conTypesearch){
                // const x:any=JSON.parse(item.ConStatus);
                // console.log(x)
                // for(let status of x){
                //     if ((status.name==conTypesearch) && ((status.checked)==true)){
                //       // alert((status.name==conTypesearch) && ((status.checked)==true))
                //       (this.list).push(item); 
                //     }
                //   }
                //   item=this.list;
                //   return item ;
                  
          }
          
          if (protypesearch){
            // alert(JSON.stringify(item.PropertyType).match(protypesearch));
           return JSON.stringify(item.PropertyType).match(protypesearch);
          }
          
           if (bhk_search){
            return JSON.stringify(item.te7).toLowerCase().match(bhk_search);
           }
         
       
          return true;
      })
    }
    else{
        return items;
    }
  }

}
