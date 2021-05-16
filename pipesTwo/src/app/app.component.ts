import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public nombre : string = "Lorem Impsum";
  public capitalizar : string = "LoReM IMpSUm";
  public arreglo : number[] = [1,2,3,4,5,6,7,8,9,10];
  public PI : number = Math.PI;
  public porcentaje : number = 0.567654;
  public salario : number = 1234.567;
  public objeto : object = {
    name: 'Terry',
    lastName: 'Greenfelder',
    city: 'New Bridgetmouth',
    direction: {
      country: 'Malaysia',
      address: 'Northeast'
    }
  };

  public valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve("Información entregada - mostrando con pipe async");
    },2000);
  });

  public fecha : Date = new Date();
  public idioma : string = "es-CL";
  public videoUrl : string = "https://www.youtube.com/embed/QR5RTU1ArI4";
  public activar : boolean = true;

  constructor(){}

  changeLangu(lengu : string) : void{
    this.idioma = lengu;
  }

  changeStatus() : void{
    this.activar = !this.activar;
  }
}
