import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiURL = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  get httpParams () {
    return new HttpParams().set('fields', 'name;capital;flag;population;alpha2Code');
  }

  buscarPais(termino: string) : Observable<Country[]> {
    const urlTotal = `${this._apiURL}/name/${termino}`;
    return this.http.get<Country[]>(urlTotal, {params : this.httpParams});
  }

  buscarCapital (termino : string) : Observable<Country[]> {
    const urlTotal = `${this._apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(urlTotal, {params : this.httpParams});
  }

  getPaisByCode(id: string) : Observable<Country> {
    const urlTotal = `${this._apiURL}/alpha/${id}`
    return this.http.get<Country>(urlTotal);
  }

  buscarRegion(termino: string) : Observable<Country[]> {
    const urlTotal = `${this._apiURL}/region/${termino}`;
    return this.http.get<Country[]>(urlTotal, {params : this.httpParams}).pipe(tap(console.log));
  }
}