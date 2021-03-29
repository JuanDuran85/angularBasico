import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  public heroesReci : Heroe[] = [];

  constructor(private heroesServices : HeroesService) { }

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe(heroes => this.heroesReci = heroes);
  }

}
