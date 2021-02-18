import { Component } from '@angular/core';
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

  buscar(){
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
    .subscribe((resp)=>{
      console.log(resp);
      this.paises = resp;
    }, (error) => {
      console.info(error);
      this.hayError = true;
      this.paises = [];
    });
  }

}
