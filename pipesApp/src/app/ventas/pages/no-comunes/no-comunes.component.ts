import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent implements OnInit {

  public nombre : string;
  public genero : string;
  public invitaMap : Object;
  public clientes : string[];
  public clientesMapa : Object;

  constructor() { }

  ngOnInit(): void {
    this.nombre = "Yecenia";
    this.genero = "femenino";
    this.invitaMap = {
      'masculino' : 'invitarlo',
      'femenino' : 'invitarla',
    };
    
    this.clientes = ['Maria','Pedro','Jose','Yecenia'];
    this.clientesMapa = {
      '=0' : 'no tenemos clientes esperando',
      '=1' : 'tenemos un cliente esperando',
      '=2' : 'tenemos 2 clientes esperando',
      'other' : 'tenemos # clientes esperando'
    }
  }

  borrando(){
    this.clientes.pop();
  }

  cambiarNombre(){
    if (this.genero === "masculino") {
      this.nombre = "Maria";
      this.genero = "femenino";
    } else {
      this.nombre = "Juan";
      this.genero = "masculino";
    }
  }

}
