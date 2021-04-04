import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Coord, Forecast } from '../interfaces/forecast.interface';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  public weatherSubject : Subject<Forecast> = new Subject<Forecast>();
  public weather$ : Observable<Forecast> = this.weatherSubject.asObservable();

  public endPoint : string = "https://api.openweathermap.org/data/2.5/forecast";

  constructor(private http : HttpClient) {

   this.weather$ = this.weatherSubject.asObservable();

    this.get({
      lat: -33.45,
      lon: -70.666667
    });
  }

  structureData(data : Forecast){

    let minMaxPerDay = {
      '04-04' : {
        
      }
    }

    data.list.forEach(weatherObject => {
      let date = new Date(weatherObject.dt * 1000);
      let hours = date.getHours();
      let month = date.getMonth();
      let day = date.getDate();




    })
  }

  get(coords : Coord){
    let args : string = `?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.key}&units=metric`;
    let url = this.endPoint + args;

    if (isDevMode()) {
      url = "assets/forecastExample.json";
    }
 
    this.http.get(url).subscribe(this.weatherSubject);
  }
}
