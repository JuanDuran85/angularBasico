import { Component, Input } from '@angular/core';
import { Dragones } from '../interfaces/dragones.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() nuevo : Dragones;
  @Input() personaje: Dragones[] = [];

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
    console.log(this.personaje);
  }
}
