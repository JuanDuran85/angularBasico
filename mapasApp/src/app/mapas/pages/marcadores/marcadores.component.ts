import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

interface MarkerColors {
  color: string,
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss']
})
export class MarcadoresComponent implements OnInit, AfterViewInit, OnDestroy {

  public mapaFinal! : mapboxgl.Map;
  public zoomLavel : number = 15;
  public centro : [number,number] = [-70.61200807074893,-33.43786874276012];

  public arregloMarcadores : MarkerColors[] = [];

  @ViewChild('mapa') divMapa! : ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapaFinal = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centro,
      zoom: this.zoomLavel
    });

    this.readMarcadorLocal();

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

  irMarcador(markerFull? : mapboxgl.Marker):void{
    this.mapaFinal.flyTo({
      center: markerFull!.getLngLat(),
      speed: 0.6,
      zoom: 15
    })
  }

  nuevoMarcador(){
    /* Colores aleatorios */
    const color : string = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    /* Marcadores dinamicos */
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    }).setLngLat(this.centro).addTo(this.mapaFinal);

    this.arregloMarcadores.push({
      color,
      marker: nuevoMarcador
    });

    this.saveMarcadoresLocal();
  }

  saveMarcadoresLocal() : void {

    const nuevoArreglo : MarkerColors[] = [];

    this.arregloMarcadores.forEach(result => {
      const color = result.color;
      const {lng,lat} = result.marker!.getLngLat();

      nuevoArreglo.push({
        color,
        centro: [lng,lat]
      })
    })

    localStorage.setItem('marcadores',JSON.stringify(nuevoArreglo));
  }

  readMarcadorLocal() : void {

    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArreglo : MarkerColors[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArreglo.forEach(result => {
      const newMarker = new mapboxgl.Marker({
        color: result.color,
        draggable: true
      })
      .setLngLat(result.centro!)
      .addTo(this.mapaFinal)
    })

  }

}
