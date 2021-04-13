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
  public heroeSelected : Heroe | undefined;
  public noResult : boolean = false;

  constructor(private heroesService : HeroesService) { }

  ngOnInit(): void {
  }

  buscando() : void{
    this.heroesService.getSugByHeroe(this.termino.trim()).subscribe(heroes => this.heroes = heroes);
    if (this.heroes.length === 0 && this.termino.trim().length > 0) {
      this.noResult = true;
    } else {
      this.noResult = false;
    }
  }

  optionSelecting(event : MatAutocompleteSelectedEvent) :  void {
    if (event.option.value) {
      const heroe : Heroe = event.option.value;
      this.termino = heroe.superhero;
      this.heroesService.getHeroeById(heroe.id!).subscribe(heroe => this.heroeSelected = heroe);
    }else {
      this.heroeSelected = undefined;
    }
  }

}
