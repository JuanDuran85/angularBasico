import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  public heroeSelected! : Heroe;

  constructor(private heroesService : HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugByHeroe(this.termino).subscribe(heroes => this.heroes = heroes);
  }

  optionSelecting(event : MatAutocompleteSelectedEvent){
    const heroe : Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroeById(heroe.id!).subscribe(heroe => this.heroeSelected = heroe);
  }

}
