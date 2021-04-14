import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})

export class AgregarComponent implements OnInit {
  
  public creators : any[] = [
    {
      id: "DC Comics",
      desc: "DC Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];

  public heroe : Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    characters: ''
  }

  constructor(
    private heroesService : HeroesService, 
    private activatedRoter : ActivatedRoute, 
    private router: Router, 
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activatedRoter.params.pipe(
        switchMap(({id})=> this.heroesService.getHeroeById(id))
      ).subscribe(heroe => this.heroe = heroe);
    } else {
      return;
    }

  }

  saveHero():void{
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }else {
      if(this.heroe.id) {
        this.heroesService.putNewHero(this.heroe).subscribe(heroe => this.showSnackBar("Registro actualizado..."))
      } else {
        this.heroesService.postNewHero(this.heroe).subscribe(heroe => {
          this.router.navigate(['/heroes/editar',heroe.id]);
          this.showSnackBar("Registro creado...")
        });
      }
    }
  }

  deleteHeroe(){

    const dialogRef = this.dialog.open(ConfirmarComponent,{
      width: '250px'
    });

    /* if (this.heroe.id) {
      this.heroesService.deleteHero(this.heroe.id!).subscribe(resp => {
        this.router.navigate(['/heroes']);
        this.showSnackBar("Registro borrado...")
      });
    } */
  }

  showSnackBar(mensaje : string) : void {
    this._snackBar.open(mensaje, 'Ok', {
      duration: 3000,
    });
  }
}
