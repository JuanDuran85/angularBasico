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

  getSugByHeroe(termino:string) : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this._baseUrl}/heroes?q=${termino}&_limit=6`)
  }

  postNewHero(heroe : Heroe) : Observable<Heroe>{
    return this.http.post<Heroe>(`${this._baseUrl}/heroes`, heroe);
  }

  putNewHero(heroe : Heroe) : Observable<Heroe>{
    return this.http.put<Heroe>(`${this._baseUrl}/heroes/${heroe.id}`, heroe);
  }
}
