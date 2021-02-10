import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})

export class HeroeComponent {
    nombre: string = "Ironman";
    edad: number = 45;

    get nombreMayuscula () : string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `El nombre es: ${this.nombre}`;
    }

    cambiarNombre () : void {
        this.nombre = "SpiderMan";
    }

    cambiarEdad () : void {
        this.edad = 24;
    }
}