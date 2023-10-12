import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchByType: any;
  searchByName(searchField: any) {
    throw new Error('Method not implemented.');
  }
  // next(products: Object) {
  //   throw new Error('Method not implemented.');
  // }
  next(product: object) {

  }
  private apiUrl = 'http://example.com/api/products';
  searchUrl = "http://172.17.15.188:8181/products";
  // typeUrl= "http://172.17.15.188:8181/products";
  // nameUrl="http://172.17.15.188:8181/products";
  private products1 = new Subject();
   cnt=new Subject();
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getCartItems()
  {
    return this.http.get("http://172.17.15.188:8181/getcart")
  }

  searchProducts(category: any) {
    console.log(category)
    return this.http.get(`${this.searchUrl}/${category}`, category);
  }

  // searchtype(producttype: any) {
  //   console.log(producttype)
  //   return this.http.get(`${this.typeUrl}/${producttype}`, producttype);
  // }
  // searchname(productname: any) {
  //   console.log(productname)
  //   return this.http.get(`${this.nameUrl}/${productname}`, productname);
  // }
}


