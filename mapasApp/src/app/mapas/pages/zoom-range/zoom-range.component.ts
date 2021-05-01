import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.scss']
})
export class ZoomRangeComponent implements OnInit, AfterViewInit, OnDestroy {

  public mapaFinal! : mapboxgl.Map;
  public zoomLavel : number = 10;
  public centro : [number,number] = [-70.61200807074893,-33.43786874276012]

  @ViewChild('mapa') divMapa! : ElementRef;

  constructor() { }
  
  ngOnDestroy(): void {
    this.mapaFinal.off('zoom',()=>{});
    this.mapaFinal.off('zoomend',()=>{});
    this.mapaFinal.off('move',()=>{});
  }

  ngAfterViewInit(): void {
    this.mapaFinal = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centro,
      zoom: this.zoomLavel
    });

    this.mapaFinal.on('zoom',(event)=>{
      this.zoomLavel = this.mapaFinal.getZoom();
    });

    this.mapaFinal.on('zoomend',(event)=>{
      if (this.mapaFinal.getZoom() > 18) {
        this.mapaFinal.zoomTo(18);
      }
    });

    this.mapaFinal.on('move',(event)=>{
      const target = event.target;
      const { lng , lat} = target.getCenter();
      this.centro = [lng, lat];
    })
  }

  ngOnInit(): void {
  }

  zoomIn() : void {
    this.mapaFinal.zoomIn();
    //this.zoomLavel = this.mapaFinal.getZoom();
  }
  
  zoomOut() : void {
    this.mapaFinal.zoomOut();
    //this.zoomLavel = this.mapaFinal.getZoom();
  }

  zoomChange(value : string) : void{
    this.mapaFinal.zoomTo(Number(value));
  }
}
