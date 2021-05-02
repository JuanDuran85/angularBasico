import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss']
})
export class MarcadoresComponent implements OnInit, AfterViewInit, OnDestroy {

  public mapaFinal! : mapboxgl.Map;
  public zoomLavel : number = 15;
  public centro : [number,number] = [-70.61200807074893,-33.43786874276012]

  @ViewChild('mapa') divMapa! : ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapaFinal = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centro,
      zoom: this.zoomLavel
    });

    /* Agregando marcadores personalizados */
    /* const markerHtml : HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Marcador Personal';
    const marker = new mapboxgl.Marker({ element: markerHtml }).setLngLat(this.centro).addTo(this.mapaFinal); */
    
    /* Marcadores estaticos */
    //const marker = new mapboxgl.Marker().setLngLat(this.centro).addTo(this.mapaFinal);
  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }

  irMarcador():void{
    console.log("ir a marcador 1");
  }

  nuevoMarcador(){
    /* Colores aleatorios */
    const color : string = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    /* Marcadores dinamicos */
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    }).setLngLat(this.centro).addTo(this.mapaFinal);
  }

}
