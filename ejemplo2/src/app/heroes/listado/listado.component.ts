import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent  {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string[] = [];
  heroeBorrado2: string = "";

  borrando(valor:number):void{
    this.heroeBorrado = this.heroes.splice(valor,1);
  }

  borrando2():void{
    this.heroeBorrado2 = this.heroes.shift() || '';
  }
}
