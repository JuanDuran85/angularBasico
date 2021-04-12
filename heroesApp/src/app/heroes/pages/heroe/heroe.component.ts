import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})

export class HeroeComponent implements OnInit {
  
  public heroe! : Heroe;
  public id : string = "";

  constructor(private activatedRoute : ActivatedRoute, private heroesService : HeroesService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((({id})=>this.heroesService.getHeroeById(id)))
    ).subscribe(heroeInfo => this.heroe = heroeInfo);
/*     this.heroesService.getHeroeById(this.id).subscribe(heroe => this.heroe = heroe); */
  }

  backPage() {
    this.router.navigate(['/heroes/listado']);
  }
}
