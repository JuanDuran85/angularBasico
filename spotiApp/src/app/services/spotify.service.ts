import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotyAppArtist } from '../interfaces/search_artist.interface';
import { map } from 'rxjs/operators';
import { SpotyApp } from '../interfaces/new_release.interface';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  public urlBase : string = environment.baseUrl;

  getQuery(query : string) {
    const url : string = `${this.urlBase}/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB8JEGg0WuDzpHTHOBE-mNpiEFJPiJam2_w9DkQidSvkJjO0NnlXZ_HTVw6zN9PWTwVVYpHbSpzp9DCo7Q' 
    });
    return this._http.get(url,{headers});
  }

  constructor(private _http : HttpClient) { }
  
  getNewReleases() : Observable<SpotyApp[]>{
    return this.getQuery('browse/new-releases').pipe(
      map(resp => resp['albums'].items)
    )
  }

  getArtista(termino:string) : Observable<SpotyAppArtist[]> {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map(resp => resp['artists'].items)
    );
  }

/*   generateNewToken(){
    return this._http.post('https://accounts.spotify.com/api/token')
  } */
}
