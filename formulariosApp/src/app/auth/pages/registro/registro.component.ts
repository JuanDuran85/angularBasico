import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

  //TODO: se va a mover a otra parte
  public expreRegular : string = '([a-zA-Z]+) ([a-zA-Z]+)';

  public miFormulario : FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.expreRegular)]]
  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string) : any {
    console.log(this.miFormulario.controls[campo].invalid);
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
}
