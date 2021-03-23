import { Component } from '@angular/core';
import * as faker from 'faker';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre = faker.name.findName();

  constructor(private primengConfig : PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}