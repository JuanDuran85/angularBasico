import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contador/contador.module';
import { DragonModule } from './dragon/dragon.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule,
    DragonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
