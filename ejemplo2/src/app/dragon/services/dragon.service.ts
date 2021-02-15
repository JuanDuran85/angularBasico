import { Injectable } from "@angular/core";

//decorador
@Injectable()
export class DragonService {

    constructor(){
        console.log("servicio inicializado");
    }
}