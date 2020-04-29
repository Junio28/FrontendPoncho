import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeProductI } from '../models/type-product-i';

@Injectable({
  providedIn: 'root'
})
export class TypeProductsService {
  API_URI = 'http://localhost:4000';
  typeproduct: TypeProductI

  constructor(private http: HttpClient) { }

  getTypeProducts(){
    return this.http.get(`${this.API_URI}/type_products`);
  }

  getTypeProduct(id: string){
    return this.http.get(`${this.API_URI}/type_products/${id}`);
  }

  addTypeProduct(typeproduct: TypeProductI){
    return this.http.post(`${this.API_URI}/type_products`, typeproduct);
  }

  deleteTypeProduct(id: string){
    return this.http.delete(`${this.API_URI}/type_products/${id}`);
  }

  updateTypeProduct(id: string | number, updatedTypeProduct: TypeProductI){
    return this.http.patch(`${this.API_URI}/type_products/${id}`,updatedTypeProduct);
  }
}
