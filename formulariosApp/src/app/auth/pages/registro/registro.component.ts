import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
/* import { emailRegular, expreRegular, validadorExterno } from 'src/app/shared/validator/validaciones'; */
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

  public miFormulario : FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.expreRegular)]],
    email: ['',[Validators.required, Validators.email, Validators.pattern(this.vs.emailRegular)], [this.emailValidate]],
    username: ['', [Validators.required, this.vs.validadorExterno ]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],
  },{
    validators: [this.vs.sonIguales('password', 'password2')]
  })

  get emailErrors() : string {
    
    const errorsEmail : ValidationErrors = this.miFormulario.get('email')?.errors;
    if (errorsEmail?.required) {
      return "El correo es obligatorio"
    } else if (errorsEmail?.pattern) {
      return "El correo no tiene formato adecuado"
    } else if (errorsEmail?.ocupado) {
      return "El correo ya se encuentra en uso"
    } else {
      return "";
    }
  }

  constructor(private formBuilder : FormBuilder, private vs: ValidatorService, private emailValidate : EmailValidatorService) { }

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