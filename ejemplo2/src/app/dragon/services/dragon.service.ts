import { Injectable } from "@angular/core";
import { Dragones } from "../interfaces/dragones.interface";

//decorador del servicio
//clase abstracta en donde se coloca la información y los métodos para interactuar con fuentes externas o para manipular el estado de la información de su aplicación. Se trabaja mucho con peticiones HTTP porque se mandan a llamar los endpoint de las APIs.  
@Injectable()
export class DragonService {
    private _personaje : Dragones[] = [
        {
          nombre: "Dragon V",
          numero: 2045
        },
        {
          nombre: "Dragon II",
          numero: 35431
        }
    ]
    
    get personaje():Dragones[] {
        return [...this._personaje]; // con el spread se rompe la referencia directa a la variable
    }

    constructor(){}

    agregarPersonaje(data:Dragones){
        this._personaje.push(data);
    }
}