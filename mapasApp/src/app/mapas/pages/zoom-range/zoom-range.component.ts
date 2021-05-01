import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.scss']
})
export class ZoomRangeComponent implements OnInit, AfterViewInit {

  public mapa! : mapboxgl.Map;

  @ViewChild('mapa') divMapa! : ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.61200807074893,-33.43786874276012],
      zoom: 18
    });
  }

  ngOnInit(): void {
  }

  zoomIn() : void {
    console.log("Zoom In");
    this.mapa.zoomIn();
  }

  zoomOut() : void {
    console.log("Zoom Out");
    this.mapa.zoomOut();
  }
}
