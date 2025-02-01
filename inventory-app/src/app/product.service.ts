import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly urlBase = 'http://localhost:8080/products-app';

  public constructor(private readonly http: HttpClient) {}

  public getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlBase}/products`);
  }

  public addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.urlBase}/products`, product);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.urlBase}/products/${id}`);
  }

  public editProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.urlBase}/products/${id}`, product);
  }
}
