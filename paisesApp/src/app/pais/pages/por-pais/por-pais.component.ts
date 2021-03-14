import { Component, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  public termino: string = "";
  public hayError : boolean = false;
  public paises : Country[] = [];
  public paisSugerido : Country[] = [];
  public mostrarSugerencias : boolean = false;

  constructor(private paisService : PaisService) { }

  buscar(termino:string){
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;
    this.paises = [];
    this.paisService.buscarPais(this.termino)
    .subscribe((resp)=>{
      this.paises = resp;
    }, () => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(valor : string){
    this.termino = valor;
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.paisService.buscarPais(valor).subscribe(sugerencia => {
      this.paisSugerido = sugerencia.splice(0,5);
    }, ()=>{
      this.paisSugerido = [];
      this.mostrarSugerencias = false;
    });
  }
}