import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent {

  get resultados() : Gif[] {
    return this.gifsService.resultados;
  }

  constructor(private gifsService : GifsService) { }

}
