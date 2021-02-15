import { Component, Input } from '@angular/core';
import { Dragones } from '../interfaces/dragones.interface';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  get personaje() :Dragones[] {
    return this.dragonService.personaje;
  }

  //@Input() personaje: Dragones[] = [];

  constructor(private dragonService: DragonService){}
}
