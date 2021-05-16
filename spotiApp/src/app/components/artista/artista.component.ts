import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/interfaces/artist.interface';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  public artista : any = {};

  constructor(private _router : ActivatedRoute, private _spotyService : SpotifyService) { }

  ngOnInit(): void {
    this._router.params.subscribe(resp => {
      this.getArtistaById(resp['id']);
    });
  }

  getArtistaById(id:string):void{
    this._spotyService.getArtistDetail(id).subscribe((resp:Artist) => {
      this.artista = resp;
    });
  }
}
