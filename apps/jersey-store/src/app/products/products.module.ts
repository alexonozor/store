import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing';
import { ProductsService } from '../core/products.service';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateProductsComponent } from './update-products/update-products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductsComponent,
    ListProductsComponent,
    UpdateProductsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
   CommonModule,
   ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
