import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendInfo(fomularioData: NgForm) : void{
    console.log(fomularioData.value);
  }

}
