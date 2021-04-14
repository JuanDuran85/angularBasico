import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: true, //comportamiento por defecto de los pipe
})
export class ImagenPipe implements PipeTransform {
  transform(value: Heroe ) : any {
    if (!value.id && !value.alt_img) {
      return "./assets/no-image.png";
    } else if(value.alt_img && value.id) {
      return value.alt_img;
    } else if(!value.alt_img && value.id){
      return `./assets/heroes/${value.id}.jpg`;
    }
  }
}
