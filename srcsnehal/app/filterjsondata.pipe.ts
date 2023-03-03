import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterjsondata'
})
export class FilterjsondataPipe implements PipeTransform {

  transform(value: any,conTypesearch:string){
    let item=value.filter(
      (obj: {
        checked: boolean; ConStatus: string; 
})=>{return obj.ConStatus==conTypesearch && obj.checked==true}
    )
    console.log(item);
  }

}
