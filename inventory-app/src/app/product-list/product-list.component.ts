import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  public products: Product[];

  public constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productService
      .getProductsList()
      .subscribe((product: Product[]) => (this.products = product));
  }

  public editProduct(idProduct: number) {
    console.debug(idProduct);
    this.router.navigate(['/edit-product', idProduct]);
  }
}
