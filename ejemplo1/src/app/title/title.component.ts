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
    public isAvailable : boolean = false;
    public masInfo : boolean = false;
    public cursos : string[];

    constructor(){
        this.name = "";
        this.edad = 0;
        this.edades = [];
        this.cursos = ["Matematica", "Fisica", "Quimica", "Electronica"];
    }

    ngOnInit(){
        this.name = "Juan";
        this.edad = 35;
        this.edades = [20,45,32,12];

        setTimeout(() => {
            this.isAvailable = true;
            this.masInfo = true
        },3500)
    }

    getEdadNombre() : string {
        return `El nombre es: ${this.name} -:- La edad es: ${this.edad}`
    }
}
