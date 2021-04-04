import { Component, OnInit } from '@angular/core';
import { Coords } from '../interfaces/weather.interface';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-geo-loc-button',
  templateUrl: './geo-loc-button.component.html',
  styleUrls: ['./geo-loc-button.component.scss']
})
export class GeoLocButtonComponent implements OnInit {

  public coordsFinal : any;
  public active : boolean;

  constructor(private geolocationService : GeolocationService) { }

  ngOnInit(): void {
    this.geolocationService.permission$.then(status => {
      this.active = (status == 'granted')
      if(this.active){
        this.geolocationService.requestGeoLocation();
      }
    });
  }

  callGeoLoca(){
    this.geolocationService.requestGeoLocation();
    this.coordsFinal = this.geolocationService.coords$;
  }
}