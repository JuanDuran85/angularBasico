import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

 /*  public formularioBasico : FormGroup = new FormGroup({
    nombre: new FormControl('Primer Valor'),
    precio: new FormControl(0),
    existencia: new FormControl(0),
  }) */

  formularioBasico : FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]], //valor, validador sincrono, validador asincronos
    precio: [0, [Validators.required, Validators.min(0)]],
    existencia: [0,[Validators.required, Validators.min(0)]],
  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  validNombre(): boolean{
    return this.formularioBasico.controls.nombre.errors && this.formularioBasico.controls.nombre.touched;
  }

}
