import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  @ViewChild('fomularioData') fomularioData! : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validName() : boolean {
    return this.fomularioData?.controls.producto?.invalid && this.fomularioData?.controls.producto?.touched;
  }

  validPrice() : boolean {
    return this.fomularioData?.controls.precio?.touched && this.fomularioData?.controls.precio?.value < 0;
  }

  //sendInfo(fomularioData: NgForm) : void{
  sendInfo() : void{
    console.log(this.fomularioData);
  }

}
