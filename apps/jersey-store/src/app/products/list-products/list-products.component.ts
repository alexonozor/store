import { Component, OnInit } from '@angular/core';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';
import { ProductsService } from '../../core/products.service';

@Component({
  selector: 'store-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public $products!: Observable<Product[]>

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.$products = this.productService.getProducts()
  }

}
