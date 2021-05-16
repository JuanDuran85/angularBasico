import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claves'
})

export class ClavesPipe implements PipeTransform {
  transform(value: string, condition : boolean = false): string {
    return (condition) ? '*'.repeat(value.length) : value;
  }
}
