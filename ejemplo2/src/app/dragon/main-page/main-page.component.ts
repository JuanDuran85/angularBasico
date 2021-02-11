import { Component } from '@angular/core';
import { Dragones } from '../interfaces/dragones.interface';

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
    nombre: '',
    numero: 0
  }

  agregando(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      this.personaje.push(this.nuevo);
      this.nuevo = {
        nombre: "",
        numero: 0
      }
    }
  }

}
