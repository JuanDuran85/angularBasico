import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dragones } from '../interfaces/dragones.interface';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() nuevo : Dragones;
  //@Output() onNuevoPersonaje: EventEmitter<Dragones> = new EventEmitter();

  constructor(private dragonService: DragonService){}

  agregando(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      console.log(this.nuevo);
      this.dragonService.agregarPersonaje(this.nuevo);
      //this.onNuevoPersonaje.emit(this.nuevo);
      this.nuevo = {
        nombre: "Ingresa un nuevo dragon",
        numero: 0
      }
    }

  }
}
