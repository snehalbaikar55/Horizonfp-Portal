import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchresult'
})
export class SearchresultPipe implements PipeTransform {

  transform(items: any, bhk_search: string,protypesearch:string,searchbyloc:string){
    
    if (items && items.length){
      
        return items.filter((item:any )=>{
          if (searchbyloc){
            alert("hi")
            return ( (JSON.stringify(item.PropertyName).toLowerCase().match(searchbyloc))||(JSON.stringify(item.Location).toLowerCase().match(searchbyloc)) );
          }
          
          if (protypesearch){
            return JSON.stringify(item.PropertyType).match(protypesearch);  
          }
          
          if (bhk_search){
            return JSON.stringify(item.te7).toLowerCase().includes(bhk_search);
          }
        
          return true;
      })
    }
    else{
        return items;
    }
  }

}
// if (conTypesearch){
          
          //   for (let k in item.ConStatus){
          //       if(item[k].ConStatus.name[k].match(conTypesearch)|| item[k].ConStatus.checked[k].match('true')) {
          //           return item;
          //       }
          //   }
          //   //return items;
          //  //return JSON.stringify(item.ConStatus).match(conTypesearch);
          // }