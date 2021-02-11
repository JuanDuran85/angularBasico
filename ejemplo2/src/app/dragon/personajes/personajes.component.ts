import { Component, Input } from '@angular/core';
import { Dragones } from '../interfaces/dragones.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  @Input() personaje: Dragones[] = [];

}
