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
  public weather$ : Observable<any> = this.weatherSubject.asObservable();

  public endPoint : string = "https://api.openweathermap.org/data/2.5/forecast";

  constructor(private http : HttpClient) {

   this.weather$ = this.weatherSubject.asObservable().pipe(map(this.structureData));

    this.get({
      lat: -33.45,
      lon: -70.666667
    });
  }

  structureData(data : Forecast){

    let minMaxPerDay = {}

    data.list.forEach((weatherObject,index) => {
      let date = new Date(weatherObject.dt * 1000);
      let hours = date.getHours();
      let month = date.getMonth();
      let day = date.getDate();
      let key = `${month}-${day}`;

      let tempPerDay : Forecast = minMaxPerDay[key] || {
        minMaxTemp : {}
      };

      if (!tempPerDay.cod || hours == 16){
        let source = weatherObject.weather[0];
        tempPerDay = { ...tempPerDay, ...source};
        tempPerDay.cod = source.id + "";
        tempPerDay['name'] = data.city.name;
        tempPerDay['temp'] = data.list[index].main.temp;
        
      }

      if (!tempPerDay.minMaxTemp.min || (tempPerDay.minMaxTemp.min < weatherObject.main.temp_min)) {
        tempPerDay.minMaxTemp.min = weatherObject.main.temp_min;
      }

      if (!tempPerDay.minMaxTemp.max || (weatherObject.main.temp_max > tempPerDay.minMaxTemp.max)) {
        tempPerDay.minMaxTemp.max = weatherObject.main.temp_max;
      }

      minMaxPerDay[key] = tempPerDay;
    })

    return Object.values(minMaxPerDay);
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
