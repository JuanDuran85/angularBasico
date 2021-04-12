import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  public termino : string = "";
  public heroes : Heroe[] = [];

  constructor(private heroesService : HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    console.log(this.termino);
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
