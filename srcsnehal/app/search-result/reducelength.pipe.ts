import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducelength'
})
export class ReducelengthPipe implements PipeTransform {

  transform(value: string, limit: any): string {
    return value.length < limit
      ? value
      : value.slice(0, limit) + '...';
  }

}
