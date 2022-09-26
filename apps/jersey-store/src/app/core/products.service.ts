import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = 'http://localhost:3333/api'

  constructor(private readonly http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    
      return this.http.get<Product[]>(`${this.API_URL}/products`)
    
  }

  public getProduct(id:string): Observable<Product> {
    
    return this.http.get<Product>(`${this.API_URL}/products/${id}`)
  
}

  public createProducts(product:Product): Observable<Product> {
    
      return this.http.post<Product>(`${this.API_URL}/products`, product)
    
  }

  public updateProducts(id:string, product:Product): Observable<Product> {
    
    return this.http.put<Product>(`${this.API_URL}/products/${id}`, product)
  
}
}
