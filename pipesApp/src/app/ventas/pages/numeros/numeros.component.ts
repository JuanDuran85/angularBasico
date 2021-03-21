import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  public ventaNetas : number = 3254756565.334565;
  public porcentaje : number = 0.56732;
  public pi : number = Math.PI;
  public euler : number = Math.E;

  constructor() { }

  ngOnInit(): void {
  }

}
