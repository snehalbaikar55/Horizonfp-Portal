import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertdataob'
})
export class ConvertdataobPipe implements PipeTransform {

  transform(value: any) {
    return JSON.parse(value);
  }

}
