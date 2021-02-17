import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  
  get historial() : string[] {
    return this.gifsService.historial;
  }

  constructor(private gifsService : GifsService) { }

  buscando(valor: string){
    this.gifsService.buscarGifs(valor);
  }
}
