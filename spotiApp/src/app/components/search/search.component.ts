import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
import { SpotyAppArtist } from './../../interfaces/search_artist.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public artista : SpotyAppArtist[] = [];

  constructor(private _spotiService : SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtis(value : string){
    this._spotiService.getArtista(value).subscribe(result =>{
      this.artista = result;
    });
  }

}
