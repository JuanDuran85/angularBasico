import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, switchMap, tap } from "rxjs/operators";
import { PaisFull, PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  public miFormulario : FormGroup = this._fBuilder.group({
    region: ['',[Validators.required]],
    pais: ['',[Validators.required]],
    frontera: ['',[Validators.required]]
  })

  //llenar selectores

  public regiones : string[] = [];
  public paisesRegion : PaisSmall[] = [];
  public fronteraContry : string[] = [];
  public cargando : boolean = false;

  constructor(private _fBuilder : FormBuilder, private paisService : PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisService.regiones;
    
    // cuando cambia el selector de regiones
/*     this.miFormulario.get('region')?.valueChanges.subscribe(result => {
      console.log(result)
      this.paisService.getCountryRegion(result).subscribe(result => {
        console.log(result)
        this.paisesRegion = result;
      })
    }); */
    
    // otra manera de hacer el codigo de arriba
    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap((_)=> {
        this.cargando = true;
        this.miFormulario.get('pais')?.reset('')
      }),
      delay(1000),
      switchMap( region => this.paisService.getCountryRegion(region))
      ).subscribe(paises => {
        this.paisesRegion = paises;
        this.cargando = false;
    })

    this.miFormulario.get('pais')?.valueChanges.pipe(
      tap((_) => {
        this.cargando = true;
        this.miFormulario.get('frontera')?.reset('')
      }),
      delay(1000),
      switchMap( codigo => this.paisService.getContryCode(codigo))
    ).subscribe(paises => {
        this.fronteraContry = paises?.borders || [];
        this.cargando = false;
    });
  }

  sevaData():void{
    console.log(this.miFormulario.value);
  }
}
