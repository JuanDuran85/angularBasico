import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  public formularioSwitchesReactivo : FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  public persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    /* con el setValue se deben tener todos los valores que se van a pasar al formulario, de lo controario genera error. Como alternativa, se puede utilizar reset */
    //this.formularioSwitchesReactivo.setValue(this.persona);
    this.formularioSwitchesReactivo.reset({...this.persona, terminos: true});
  }
}
