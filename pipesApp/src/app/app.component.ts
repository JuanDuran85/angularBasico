import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre = faker.name.findName();

  mostrarNombre(){
    console.log(this.nombre);
  }
}