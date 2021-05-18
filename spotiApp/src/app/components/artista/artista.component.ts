import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Artist } from 'src/app/interfaces/artist.interface';
import { SpotifyService } from './../../services/spotify.service';
import { AlbumsArtist } from './../../interfaces/album-artist.interface';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  public artista : any = {};
  public loading : boolean = false;
  public track : AlbumsArtist[] = [];

  constructor(private _router : ActivatedRoute, private _spotyService : SpotifyService) { }

  ngOnInit(): void {
    this._router.params.subscribe(resp => {
      this.getArtistaById(resp['id']);
      this.getTopTracksArtis(resp['id']);
    });
    this.loading = true;
  }

  getArtistaById(id:string):void{
    this._spotyService.getArtistDetail(id).pipe(
      delay(800)
    ).subscribe((resp:Artist) => {
      this.artista = resp;
      this.loading = false;
    });
  }

  getTopTracksArtis(id:string){
    this._spotyService.getTopTracks(id).subscribe((resp) => {
      this.track = resp;
      console.log(this.track);
    });
  }
}
