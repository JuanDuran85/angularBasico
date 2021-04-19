import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  public formularioDinamico : FormGroup = this.formBuilder.group({
    producto:[null,[Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Swat 4', Validators.required],
      ['Fifa', Validators.required]
    ],Validators.required)
  });

  public newFavorito : FormControl = this.formBuilder.control('',Validators.required);

  constructor(private formBuilder : FormBuilder) { }

  get favoritosArray() :  FormArray {
    return this.formularioDinamico.get('favoritos') as FormArray;
  }

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

  addFav(){
    if (this.newFavorito.invalid) {
      return;
    }
    
  }
}
