import { Component, OnInit } from '@angular/core';
import { showUp } from '../animations/showUp.animation';
import { Weather } from '../interfaces/weather.interface';
import { CurrentWeatherService } from '../services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  animations: [showUp]
})
export class CurrentWeatherComponent implements OnInit {

  public weatherLocal : Weather;

  constructor(private weatherService: CurrentWeatherService){}

  ngOnInit(): void {
    this.weatherService.weather$.subscribe(data => {
      this.weatherLocal = data;
    });
  }

}
