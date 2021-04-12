import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _baseUrl : string = environment.urlBase;

  constructor(private http : HttpClient) { }

  getHeroes() : Observable<Heroe[]>{
    return this.http.get <Heroe[]>(`${this._baseUrl}/heroes`)
  }

  getHeroeById(id : string) : Observable<Heroe> {
    return this.http.get<Heroe>(`${this._baseUrl}/heroes/${id}`)
  }
}
