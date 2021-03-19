import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
