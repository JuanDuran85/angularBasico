import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {

  hayError: boolean = false;
  termino: string = "";
  capital: Country[] = [];

  constructor(private paisService : PaisService) { }

  buscar(termino : string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
    .subscribe(resp =>{
      this.capital = resp;
    }, () => {
      this.hayError = true;
      this.capital = [];
    })
  }
}
