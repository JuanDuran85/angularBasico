import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent {
  public product: Product;
  public id: number;

  public constructor(
    private readonly productService: ProductService,
    private readonly routeActive: ActivatedRoute,
    private readonly router: Router
  ) {
    this.product = new Product();
  }

  public ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe({
      next: (data) => (this.product = data),
      error: (err) => console.error(err),
    });
  }

  public onSubmit(): void {
    this.editProduct();
  }
  private editProduct(): void {
    this.productService.editProduct(this.id, this.product).subscribe({
      next: (data) => this.productList(),
      error: (err) => console.error(err),
    });
  }
  private productList(): void {
    this.router.navigate(['/products']);
  }
}
