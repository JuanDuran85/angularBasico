import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SpotyApp } from '../interfaces/new_release.interface';
import { SpotyAppArtist } from '../interfaces/search_artist.interface';
import { AlbumsArtist } from '../interfaces/album-artist.interface';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  public urlBase : string = environment.baseUrl;

  getQuery(query : string) {
    const url : string = `${this.urlBase}/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB-wmiVOxdCRM2ovj3EdEqEx3hSctEwP2kem_8iAUNw419rwOfkTi_wjZWNhlqnKtI6A4p-Mv6cfQz4bn0' 
    });
    return this._http.get(url,{headers});
  }

  constructor(private _http : HttpClient) { }
  
  getNewReleases() : Observable<SpotyApp[]>{
    return this.getQuery('browse/new-releases').pipe(
      map(resp => resp['albums'].items)
    )
  }

  getArtistas(termino:string) : Observable<SpotyAppArtist[]> {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map(resp => resp['artists'].items),
      catchError(err => of(err.error.error.status))
    );
  }

  getArtistDetail(id:string) : Observable<Object>{
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id:string) : Observable<AlbumsArtist[]>{
    return this.getQuery(`artists/${id}/top-tracks?market=ES`).pipe(
      map(result => result['tracks'])
    )
  }

  generateNewToken(){
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded' 
    }); 
    const body : Object = {
      grant_type : 'client_credentials',
      client_id: '1089b307322b4c1492cf12e309081829',
      client_secret: `${environment.client_secret}`
    }
    return this._http.post('https://accounts.spotify.com/api/token',{headers},body)
  }
}