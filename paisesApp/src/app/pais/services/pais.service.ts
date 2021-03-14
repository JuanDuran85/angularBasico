import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiURL = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string) : Observable<Country[]> {
    const urlTotal = `${this._apiURL}/name/${termino}`;
    return this.http.get<Country[]>(urlTotal);
  }

  buscarCapital (termino : string) : Observable<Country[]> {
    const urlTotal = `${this._apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(urlTotal);
  }

  getPaisByCode(id: string) : Observable<Country> {
    const urlTotal = `${this._apiURL}/alpha/${id}`
    return this.http.get<Country>(urlTotal);
  }
}