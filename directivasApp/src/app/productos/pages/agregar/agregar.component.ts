import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})

export class AgregarComponent implements OnInit {

  public formProductos : FormGroup = this._fb.group({
    nombre: ['', Validators.required]
  })

  constructor( private _fb : FormBuilder ) { }

  ngOnInit(): void {
  }

  errorExist(campo:string) : boolean {
    return this.formProductos.get(campo)?.invalid || false;
  }

}
