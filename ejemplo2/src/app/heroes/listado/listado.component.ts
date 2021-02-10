import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent  {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string[] = [];

  borrando(valor:number):void{
    console.log(valor);
    this.heroeBorrado = this.heroes.splice(valor,1);
    console.log(this.heroeBorrado);
  }
}
