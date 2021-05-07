import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private _http : HttpClient) { }

  getDataDona() : Observable<Object>{
    return this._http.get('http://localhost:3000/grafica');
  }

  getUserRS() {
    return this._http.get('http://localhost:3000/grafica').pipe(
      delay(2000),
      map(result => {
        const labels = Object.keys(result);
        const values = Object.values(result);
        return {labels,values};
      })
    )
  }
}
