import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from './../../services/pais.service';
import { Country } from './../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  public pais!: Country; //pais puede ser nulo, eso quiere decir el !

  constructor( private activetedRouter : ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    //extraemos los parametros de la ruta, luego se le envian al servicio paisService al observable getPaisByCode
/*     this.activetedRouter.params.subscribe(({id}) => {
      console.log(id);
      this.paisService.getPaisByCode(id).subscribe(pais => {
        console.log(pais);
      })
    }) */

    //se trabajara con pipes y el operador switchMap ya que permite recibir y regresar un observable
    this.activetedRouter.params
    .pipe(
      switchMap(({ id }) => this.paisService.getPaisByCode(id)),
      tap(console.log)
    )
    .subscribe(pais => {
      this.pais = pais;
    })
  }
}