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

  public colorDirective : string;
  public changeMsg : string = "numero modificado...";

  constructor( private _fb : FormBuilder ) { }

  ngOnInit(): void {
  }

  errorExist(campo:string) : boolean {
    return this.formProductos.get(campo)?.invalid || false;
  }

  changeColor() : void{
    const colorChange = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.colorDirective = colorChange;
  }

  changeMSG() : void{
    this.changeMsg = Math.random().toString();
  }

}
