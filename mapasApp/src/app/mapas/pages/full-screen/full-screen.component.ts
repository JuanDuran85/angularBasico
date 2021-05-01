import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let map = new mapboxgl.Map({
      container: 'mapaElement',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.61200807074893,-33.43786874276012],
      zoom: 18
    });
  }
}