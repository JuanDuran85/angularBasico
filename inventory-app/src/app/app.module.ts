import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { provideHttpClient } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductListComponent, AddProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
