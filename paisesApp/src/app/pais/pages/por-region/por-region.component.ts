import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  public regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActiva : string;
  public hayError : boolean = false;
  public paises : Country[] = [];

  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

  activaRegion(termino: string){

    if (termino === this.regionActiva) { return;}
    this.regionActiva = termino;
    this.paises = [];
    this.paisService.buscarRegion(termino).subscribe(resp => {
      this.paises = resp;
    }, (error)=>{
      console.log(error);
      this.paises = [];
    });
  }

  getClassCSS(termino: string) {
    return (this.regionActiva === termino) ? 'btn-dark' : 'btn-outline-dark';
  }
}