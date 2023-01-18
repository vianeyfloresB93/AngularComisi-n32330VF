import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  constructor(public productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.loadProducts();
  }

  createProduct() {
    if (this.form.valid) {
      this.productsService.createProduct(this.form.value as Pick<Product, 'name' | 'description'>);
    } else {
      alert('El formulario es invalido');
    }
  }
}
