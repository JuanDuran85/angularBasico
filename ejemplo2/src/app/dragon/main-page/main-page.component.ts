import { Component } from '@angular/core';
import { Dragones } from '../interfaces/dragones.interface';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  personaje : Dragones[] = [
    {
      nombre: "Dragon V",
      numero: 2045
    },
    {
      nombre: "Dragon II",
      numero: 35431
    }
  ]

  nuevo : Dragones = {
    nombre: 'Dragon III',
    numero: 0
  }

  agregarNuevoPersonaje(event: Dragones){
    this.personaje.push(event);
  }

  //inyeccion de dependencia. Se inyecta el servicio
  constructor(public dragonService: DragonService){}
}
