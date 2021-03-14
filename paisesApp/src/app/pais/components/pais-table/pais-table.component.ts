import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.scss']
})
export class PaisTableComponent implements OnInit {

  @Input() paises : Country[] = [];

  constructor() { }

  
  ngOnInit(): void {

  }

}
