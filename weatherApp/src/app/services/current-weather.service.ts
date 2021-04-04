import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Coords, Weather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  public weatherSubject : Subject<any> = new Subject<any>(); //sujeto
  public weather$ : Observable<any> = this.weatherSubject.asObservable(); //observable

  public endPoint : string = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http : HttpClient) {

    this.weather$ = this.weatherSubject.asObservable()
    .pipe(map((data : any )=>{
      let weather : Weather = {
        ...data
      };
      return weather;
    }));

    this.get({
      lat: -33.45,
      lon: -70.666667
    });
  }

  get(coords : Coords){
    let args : string = `?lat=${coords.lat}&lon=${coords.lon}&appid=${environment.key}&units=metric`;
    let url = this.endPoint + args;

    if (isDevMode()) {
      url = "assets/weatherExample.json";
    }

    this.http.get(url).subscribe(this.weatherSubject);
  }
}