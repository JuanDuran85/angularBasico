import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegular, expreRegular, validadorExterno } from 'src/app/shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

  public miFormulario : FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(expreRegular)]],
    email: ['',[Validators.required, Validators.email, Validators.pattern(emailRegular)]],
    username: ['', [Validators.required, validadorExterno ]]
  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "AAAA BBBB",
      email: 'user1@user1.com'
    })
  }

  campoNoValido(campo: string) : boolean {
    //console.log(this.miFormulario.controls[campo].invalid);
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() : void {
    //console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
