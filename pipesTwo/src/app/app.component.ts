import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public nombre : string = "Lorem Impsum";
  public arreglo : number[] = [1,2,3,4,5,6,7,8,9,10];
  public PI : number = Math.PI;
  public porcentaje : number = 0.567654;
  public salario : number = 1234.567;

  constructor(){}
}
