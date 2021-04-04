import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Coords } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public coordsSubject : Subject<Coords> = new Subject<Coords>();
  public coords$ : Observable<Coords> = this.coordsSubject.asObservable();
  public permission$ : Promise<any>;
  public coordsPromise : Promise<Coords>;

  constructor() { 
    this.permission$ = navigator.permissions.query({name:'geolocation'}).then(permission => permission.state);
  }

  requestGeoLocation() : void {
    if (!this.coordsPromise){
      this.coordsPromise = this.getGeolocation()
    }
    this.coordsPromise.then(coords =>{
      this.coordsSubject.next(coords);
    });
  }

  getGeolocation() : Promise<Coords>{ 
    return new Promise((resolve, reject) => {
      if (!navigator || !('geolocation' in navigator)) {
        return reject('La Geolocalización no esta disponible.');
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.warn('ERROR(' + error.code + '): ' + error.message);
          reject('La Geolocalización no esta disponible.');
        }
      );
    })
  }
}
