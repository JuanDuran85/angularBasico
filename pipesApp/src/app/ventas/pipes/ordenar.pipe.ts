import { Heroe } from './../interfaces/ventas.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor : string): Heroe[] {
    
    switch (ordenarPor) {
      case 'color':
        heroes = heroes.sort((a,b) => a.color > b.color ? 1 : -1);
        return heroes;
        break;
      case 'nombre':
        heroes = heroes.sort((a,b) => a.nombre > b.nombre ? 1 : -1);
        return heroes;
        break;
      case 'volar':
        heroes = heroes.sort((a,b) => a.vuela > b.vuela ? -1 : 1);
        return heroes;
        break;
      default:
        return heroes;
        break;
    }
  }
}
