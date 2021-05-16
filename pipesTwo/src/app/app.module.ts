import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import localEsCLP from '@angular/common/locales/es-CL';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsCLP);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ClavesPipe } from './pipes/claves.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomSeguroPipe,
    ClavesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
