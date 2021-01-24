import { from } from "rxjs";
import {Component, OnInit} from '@angular/core'; // decorador para componentes, marca una clase como un componente de angular, permite configurar partes importantes del documento

@Component({
  selector: 'app-title',
 /*  template: `
    <h1>Titulo del componente</h1>
  ` */
  templateUrl: 'title.component.html',
  /* styles: ['h1{font-family:Arial}','p{color:blue}'] */
  styleUrls: ['title.component.scss']
})

export class TitleComponent implements OnInit {
    public name : string;
    public edad : number;
    public edades : number[];

    constructor(){
        this.name = "";
        this.edad = 0;
        this.edades = [];
    }

    ngOnInit(){
        this.name = "Juan";
        this.edad = 35;
        this.edades = [20,45,32,12]
    }

    getEdadNombre() : string {
        return `El nombre es: ${this.name} -:- La edad es: ${this.edad}`
    }
}
