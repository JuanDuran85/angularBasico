import { Color, Heroe } from './../../interfaces/ventas.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {

  public textUpLo : boolean = false;
  public ordenarPor : string = '';
  public heroes : Heroe[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul
    },   
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Robin",
      vuela: false,
      color: Color.verde
    },
    {
      nombre: "Daredevil",
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: "Linterna Verde",
      vuela: true,
      color: Color.verde
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  changeText(){
    this.textUpLo = !this.textUpLo;
  }

  changeOrder(valor : string) {
    this.ordenarPor = valor;
  }

}
