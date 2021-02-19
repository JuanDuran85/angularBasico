import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino: string = "Hola Mundo";
  hayError : boolean = false;
  paises : Country[] = [];

  constructor(private paisService : PaisService) { }

  buscar(termino:string){
    this.termino = termino;
    this.hayError = false;
    this.paises = [];
    this.paisService.buscarPais(this.termino)
    .subscribe((resp)=>{
      this.paises = resp;
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(valor : string){
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
