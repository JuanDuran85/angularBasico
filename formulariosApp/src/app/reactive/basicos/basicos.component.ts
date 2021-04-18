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
    nombre: [null, [Validators.required, Validators.minLength(3)]], //valor, validador sincrono, validador asincronos
    precio: [null, [Validators.required, Validators.min(0)]],
    existencia: [null,[Validators.required, Validators.min(0)]],
  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formularioBasico.reset({
      nombre: "Caja",
      precio: 1500,
    })
  }

  validCampo(campo : string): boolean{
    return this.formularioBasico.controls[campo].errors && this.formularioBasico.controls[campo].touched;
  }

  saveData() : void {
    if (this.formularioBasico.valid) {
      console.log(this.formularioBasico.value);
      setTimeout(()=>{
        this.formularioBasico.reset();
      },1500);
    } else {
      this.formularioBasico.markAllAsTouched();
    }
  }
}