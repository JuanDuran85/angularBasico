import { Component } from '@angular/core';
import { Dragones } from '../interfaces/dragones.interface';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  // personaje: Dragones[] = [];

  nuevo : Dragones = {
    nombre: 'Dragon III',
    numero: 0
  }

  get personaje(): Dragones[] {
    return this.dragonService.personaje;
  }

  // esta es una forma de hacer los getters para los servicios
 /*  get personaje(): Dragones[] {
    return this.dragonService.personaje;
  }  */

/*   agregarNuevoPersonaje(event: Dragones){
    this.personaje.push(event);
  } */

  //inyección de dependencia. Se inyecta el servicio
  constructor(public dragonService: DragonService){
/* Esta forma es la menos optima de trabajar, ya que lo mejor es hacer 
    this.personaje = this.dragonService.personaje;
   */
  }
}
