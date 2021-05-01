import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisFull, PaisSmall } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones : string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _baseUrl : string = "https://restcountries.eu/rest/v2";

  get regiones() : string[]{
    return [...this._regiones]
  }

  constructor(private _http : HttpClient) { }

  getCountryRegion(region : string) : Observable<PaisSmall[]>{
    const url : string = `${this._baseUrl}/region/${region}?fields=name;alpha3Code`;
    return this._http.get<PaisSmall[]>(url);
  }

  getContryCode(codigo : string) : Observable<PaisFull | null>{
    if (!codigo) {
      return of(null)
    }
    const url : string = `${this._baseUrl}/alpha/${codigo}`;
    return this._http.get<PaisFull>(url);
  }

  getContrysByCodesSmall(codigos : string) : Observable<PaisSmall>{
    const url : string = `${this._baseUrl}/alpha/${codigos}?fields=name;alpha3Code`;
    return this._http.get<PaisSmall>(url);
  }

  getContrysCodes(borders: string[]): Observable<PaisSmall[]>{
    if (!borders) {
      return of([]);
    }

    const peticiones : Observable<PaisSmall>[] = [];
    
    borders.forEach(codigo => {
      const peticion = this.getContrysByCodesSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);
  }
}
