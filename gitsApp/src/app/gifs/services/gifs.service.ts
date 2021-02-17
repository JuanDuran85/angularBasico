import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey : string = "l0ZTnQsbxo0D7tMMbezTo5Jmv2peA6gZ";
  private _historial: string[] = [];

  public resultados : Gif[] = [];

  get historial() : string[] {
    return [...this._historial]
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }
  
  buscarGifs(query: string = ''){
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);

      localStorage.setItem('historial',JSON.stringify(this._historial));

      this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=l0ZTnQsbxo0D7tMMbezTo5Jmv2peA6gZ&q=${query}&limit=10`)
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados',JSON.stringify(this.resultados));
      })
    }
  }
}