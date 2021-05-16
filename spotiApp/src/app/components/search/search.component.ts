import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
import { SpotyAppArtist } from './../../interfaces/search_artist.interface';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public artista : SpotyAppArtist[] = [];
  public loading :  boolean = false;

  constructor(private _spotiService : SpotifyService) {}
  
  ngOnInit(): void {}
  
  searchArtis(value : string){
    this.loading = true;
    this._spotiService.getArtistas(value).pipe(
      delay(500),
    ).subscribe((result:any) =>{
      if (result === 400) {
        this.artista = [];
      } else {
        this.artista = result;
      }
      this.loading = false;
    });
  }
}
