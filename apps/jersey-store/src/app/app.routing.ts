import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  },

  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full'
  }
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }