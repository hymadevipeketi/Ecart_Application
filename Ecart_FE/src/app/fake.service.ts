import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http:HttpClient) {
    this.getAllProducts();
   }

  getAllProducts()
  {
    return this.http.get("https://fakestoreapi.com/products");
  }
}
