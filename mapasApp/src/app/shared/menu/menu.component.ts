import { Component, OnInit } from '@angular/core';

interface MenuItam {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItem : MenuItam[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'Fullscreen'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
