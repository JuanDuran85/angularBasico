import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: false,

  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  public product: Product;

  public constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {
    this.product = new Product();
  }

  public onSubmit(): void {
    this.saveProduct();
  }
  private saveProduct(): void {
    this.productService.addNewProduct(this.product).subscribe({
      next: (data) => {
        console.debug(data);
        this.productList();
      },
      error: (err) => console.debug(err),
    });
  }
  private productList(): void {
    this.router.navigate(['/products']);
  }
}
