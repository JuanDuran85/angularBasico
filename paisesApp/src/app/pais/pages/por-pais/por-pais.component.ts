import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino: string = "Hola Mundo";

  constructor(private paisService : PaisService) { }

  buscar(){
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((resp)=>{
      console.log(resp);
    });
  }

}
