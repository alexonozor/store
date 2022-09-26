import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ListProductsComponent,
      },
      {
        path: 'new',
        component: CreateProductsComponent,
      },
      {
        path: ':id/edit',
        component: UpdateProductsComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule],
})
export class ProductsRoutingModule {}
