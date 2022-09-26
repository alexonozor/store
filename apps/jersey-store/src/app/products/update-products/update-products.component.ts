import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ProductsService } from '../../core/products.service';
import { Product } from '@prisma/client';
import { Location } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'store-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
  productForm!: FormGroup;
  isLoading = false;
  id: string;
  product!: Product;


  constructor(
    private _formBuilder: FormBuilder,
    private productService: ProductsService,
    private location: Location,
    private route: ActivatedRoute
  ) { 
    this.id  = this.route.snapshot.params['id']; //better to use resolver
    if (this.id) {
      this.getProduct(this.id) // 
    }
   
  }

  ngOnInit(): void {
    
  }


  getProduct(id:string) {
    this.productService.getProduct(id).subscribe((product:Product) => {
      this.product = product;
      this.productForm = this.createProductForm()
    })
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      image: ['https://i.imgur.com/KeQtXT3.png', Validators.required],
      name: [this.product?.name, Validators.required],
      price: [this.product?.price, Validators.required],
      sku: [this.product?.sku, Validators.required],
      description: [this.product?.description, Validators.required],
    });
  }


  save() {
    this.isLoading = true;
    this.productService.updateProducts(this.id, this.productForm.getRawValue())
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(() => {
      this.isLoading = true;
      this.location.back();
    })
  }

  back() {
    this.location.back();
  }

}
