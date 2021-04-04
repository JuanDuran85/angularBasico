import { Component, OnInit } from '@angular/core';
import { Forecast } from '../interfaces/forecast.interface';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  public forecastLocal: Forecast[];

  constructor(private forecastService : ForecastService) { }

  ngOnInit(): void {
    this.forecastService.weather$.subscribe(data => this.forecastLocal = data);
    console.log(this.forecastService.weather$.subscribe(console.log));
  }

}
