import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claves'
})

export class ClavesPipe implements PipeTransform {

  transform(value: string, condition : boolean): string {
    let claveTransform : string = "";
    if (condition){
      for (let i = 0; i < value.length; i++) {
        claveTransform += '*';
      }
      return claveTransform;
    };

    return value;
  }
}
