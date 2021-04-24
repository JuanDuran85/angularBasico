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

  deleteGame(i: number){
/*     this.formularioDinamico.controls.favoritos.value.splice(i,1);
    this.favoritosArray.controls.splice(i,1); */
    this.favoritosArray.removeAt(i);
  }

  addFav(){
    if (this.newFavorito.invalid) {
      return;
    }
    
  /*   this.favoritosArray.push(new FormControl(this.newFavorito.value, Validators.required)); */
    //cualquiera de las dos opciones son validas.
    this.favoritosArray.push(this.formBuilder.control(this.newFavorito.value, Validators.required));

    this.newFavorito.reset();
  }
}
