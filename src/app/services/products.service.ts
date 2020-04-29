import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductI } from '../models/product-i';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URI = 'http://localhost:4000';
  product: ProductI

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URI}/products`);
  }

  getProduct(id: string){
    return this.http.get(`${this.API_URI}/products/${id}`);
  }

  addProduct(product: ProductI){
    return this.http.post(`${this.API_URI}/products`, product);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  updateProduct(id: string | number, updatedProduct: ProductI){
    return this.http.patch(`${this.API_URI}/products/${id}`,updatedProduct);
  }
}
