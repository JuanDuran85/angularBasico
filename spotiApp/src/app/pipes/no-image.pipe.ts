import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  transform(value: any[]): string {  
    if (value !== undefined) {
      return value.length > 0 ? value[0].url : './assets/img/noimage.png';
    } else {
      return './assets/img/noimage.png'
    }
  }
}
