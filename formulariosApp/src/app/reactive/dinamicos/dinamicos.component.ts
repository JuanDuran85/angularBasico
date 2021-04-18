import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  public formularioDinamico : FormGroup = this.formBuilder.group({
    producto:[null,[Validators.required, Validators.minLength(3)]]
  });

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  validatorCampo(campo: string) : boolean{
    return this.formularioDinamico.controls[campo].errors && this.formularioDinamico.controls[campo].touched;
  }

  savedData(){
    if (this.formularioDinamico.valid) {
      console.log(this.formularioDinamico.value);
    } else {
      this.formularioDinamico.markAllAsTouched();
    }
  }
}
