
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   getCartItemCount() {
//     throw new Error('Method not implemented.');
//   }
//   getCartTotal() {
//     throw new Error('Method not implemented.');
//   }

//   public cartItemList : any =[]
//   public productList = new BehaviorSubject<any>([]);
//   public search = new BehaviorSubject<string>("");

//   constructor(private http: HttpClient) { }

//   cartUrl= "http://172.17.15.254:9595/addcart/1525319664";
//   getProducts():Observable<any>{
//     return this.http.get(this.cartUrl)
//   }

//   setProduct(product : any){
//     this.cartItemList.push(...product);
//     this.productList.next(product);
//   }
//   addtoCart(product : any){
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();
//     console.log(this.cartItemList)
//   }
//   getTotalPrice() : number{
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
//       grandTotal += a.total;
//     })
//     return grandTotal;
//   }
//   removeCartItem(product: any){
//     this.cartItemList.map((a:any, index:any)=>{
//       if(product.id=== a.id){
//         this.cartItemList.splice(index,1);
//       }
//     })
//     this.productList.next(this.cartItemList);
//   }
//   removeAllCart(){
//     this.cartItemList = []
//     this.productList.next(this.cartItemList);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  private currentUser: string | null = null;
  public subject = new Subject();
  currentUser1: any;
  public cartCount=new Subject();

  constructor(private http: HttpClient) { }
  // private cartUrl = "http://172.17.15.254:9595/";
  private cartUrl = "http://172.17.15.188:8181/addtocart";
  private removeItemById="http://172.17.15.188:8181/remove/"
  private removeAllItems="http://172.17.15.188:8181"

  getProducts(): Observable<any> {
    const url = `${this.cartUrl}getcart/${this.currentUser}`;
    return this.http.get(url);
  }
  getDataCount(): Observable<number> {
    const url = `${this.cartUrl}`;
    return this.http.get(url).pipe(
      map((res: any) => res.length)
    );
  }

  addtoCart(product: any) {
    const addCart = {
      userid: this.currentUser,
      cartid: this.getNewCartId(this.currentUser1),
      productname: product.productname,
      price: product.price,
      quantity: 1,
      total: product.price,
      Image:product.image,
    };
   console.log(addCart);
   
    this.cartItemList.push(addCart);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    if (this.currentUser) {
      const url = `${this.cartUrl}`;
      this.http.post(url, addCart).subscribe();
    }
  }

  private getNewCartId(userid: string) {
    const timestamp = Date.now();
    return Math.abs(parseInt(userid) + timestamp);
  }


  removeCartItem(product: any) {
    console.log(product);
  return this.http.delete(this.removeItemById+""+product.id)
    
  }

  getCartItemsById()
  {
    const id=sessionStorage.getItem("userId")
    console.log(id);
    return this.http.get("http://172.17.15.188:8181/getcart/"+id)
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);

    if (this.currentUser) {
      const url = `${this.cartUrl}remove/${this.currentUser}`;
      this.http.put(url, this.cartItemList).subscribe();
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  setCurrentUser(userId: string | null) {
    this.currentUser = userId;
    if (this.currentUser1) {
      this.getProducts().subscribe((res: any) => {
        this.cartItemList = res;
        this.productList.next(this.cartItemList);
      });
    }
  }
  postUrl = 'http://172.17.15.188:8181/addtocart'
  postToCart(id: any): Observable<any> {
    return this.http.post(this.postUrl, id, { responseType: 'text' });
  }
}

