import { Component, OnInit } from '@angular/core';
import { loadingAnimation } from '../animations/loading.animation';
import { CurrentWeatherService } from '../services/current-weather.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [loadingAnimation()]
})
export class LoadingComponent implements OnInit {

  private _elements : string[] = ["#ffe5ec", "#ff80a0", "#ff2e63", "#1a0006"]
  public elements : string[];

  constructor(public currentWeatherService : CurrentWeatherService) { }

  ngOnInit(): void {
    this.set();
  }

  set() : void {
    this.elements = this._elements;
    this.shedulenextIteration();
  }

  shedulenextIteration() {
    setTimeout(() => {
      if (this.elements.length === 0 ) {
        return this.set()
      }else {
        this.clear();
      }
    }, 100 * this._elements.length + 300);
  }

  clear() : void {
    this.elements = [];
    this.shedulenextIteration();
  }
}
