import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly urlBase = 'http://localhost:8080/products-app';

  constructor(private readonly http: HttpClient) {}

  public getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlBase}/products`);
  }
}
