import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ProductsService } from '../../core/products.service';
import { Product } from '@prisma/client';
import { Location } from '@angular/common';

@Component({
  selector: 'store-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {
  productForm!: FormGroup;
  isLoading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private productService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.productForm = this.createProductForm()
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      image: ['https://i.imgur.com/KeQtXT3.png', Validators.required],
      name: ['', Validators.required],
      price: [0, Validators.required],
      sku: ['', Validators.required],
      description: ['', Validators.required],
    });
  }


  save() {
    this.isLoading = true;
    this.productService.createProducts(this.productForm.getRawValue())
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((product: Product) => {
      this.isLoading = true;
      this.location.back();
    })
  }

  back() {
    this.location.back();
  }

}
