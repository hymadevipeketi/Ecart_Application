import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  login='http://172.17.15.188:8181/login';
  registration='http://172.17.15.188:8181/register';
  getProductsUrl='http://172.17.15.188:8181/selectproducts';
  resetpassword="http://172.17.15.188:8181/reset/"
  // getCartCount: any;
  
  constructor(private http:HttpClient){

  }
  public show=new BehaviorSubject(true);
  // getfashionUrl='http://172.17.15.254:9595/select/fashion';
  // getelectronicUrl ='http://172.17.15.254:9595/select/electronics';
  // getFurnitureUrl ='http://172.17.15.254:9595/select/furniture';
  // constructor(private http:HttpClient) { }
  getAllproducts(){
   return this.http.get(this.getProductsUrl);
   
   
  }
  getCartCount(){
    return this.http.get("http://172.17.15.188:8181/getcart/1")
  }
  resetPassword(newPassword:any)
  {
    console.log(newPassword);
   const userid= sessionStorage.getItem("userId");
   console.log(userid);
   
    // const url = `this.resetpassword/${id}/${password}`;
    // this.http.put(`http://172.17.15.254:9595/reset/`)
    const url = `http://172.17.15.188:8181/reset/${userid}/${newPassword}`;
    return this.http.put(url, null);
  }

post(userdata:any): Observable<any>{
       return this.http.post(`${this.registration}`,userdata);}
}
