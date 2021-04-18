import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  @ViewChild('formularioSwitches') formularioSwitches! : NgForm;

  public persona = {
    genero: 'F',
    notificaciones: true
  }

  public terminosCondiciones: boolean = false;


}
