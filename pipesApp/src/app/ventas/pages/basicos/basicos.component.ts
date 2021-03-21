import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  public titleUppercase : string = "TITULO UPPERCASE";
  public titleLowercase : string = "titulo lowecase";
  public fecha : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
