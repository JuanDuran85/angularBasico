import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipes } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    NumerosComponent, 
    NoComunesComponent, 
    BasicosComponent, 
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipes,
    OrdenarPipe
  ],
  exports: [
    NumerosComponent, 
    NoComunesComponent, 
    BasicosComponent, 
    OrdenarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class VentasModule { }
