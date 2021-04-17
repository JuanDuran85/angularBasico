import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorito, Persona } from '../interfaces/dinamicos.interface';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  @ViewChild('formularioDinamico') formularioDinamico! : NgForm;

  public persona : Persona = {
    nombre: "Juan",
    favoritos: [
      {id: 1, nombre: "Swat 4"},
      {id: 2, nombre: "GTA San Andrea"},
    ]
  }

  public newGame : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  saveInfo():void{
    console.log("guardado");
  }

  deleteGame(index : number):void{
    this.persona.favoritos.splice(index,1);
  }

  addFavorito(): void{
    const newFavorito : Favorito = {
      id: this.persona.favoritos.length+1,
      nombre: this.newGame
    }
    this.persona.favoritos.push({...newFavorito});
    this.newGame = "";
  }

}
