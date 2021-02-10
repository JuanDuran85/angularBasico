import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  titulo : string = 'Contador';
  numero : number = 0;
  base : number = 5;

  acumular(valor: number){
    this.numero += valor;
  }
}
