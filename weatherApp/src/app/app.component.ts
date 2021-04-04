import { Component, OnInit } from '@angular/core';
import { ForecastService } from './services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public forecastService : ForecastService){}

  ngOnInit(): void {
    this.forecastService.weatherSubject.subscribe(console.log);
  }

}
