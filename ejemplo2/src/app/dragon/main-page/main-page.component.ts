import { Component } from '@angular/core';

interface Dragones {
  nombre: string;
  numero: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  nuevo : Dragones = {
    nombre: 'Dragon VI',
    numero: 3764
  }

  agregando(){
    console.log(this.nuevo);
  }

}
