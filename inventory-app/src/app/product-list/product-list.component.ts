import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  public products: Product[];

  public constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  };

  private getAllProducts(): void {
    this.productService.getProductsList().subscribe((product: Product[]) => this.products = product);  
  }
}
