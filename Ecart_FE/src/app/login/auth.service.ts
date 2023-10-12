import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl="http://172.17.15.188:8181/login"
  constructor(private http:HttpClient) { }
  login(uname:any,pw:any){
    const data={
      uname:uname,
      password:pw
    }
   return this.http.post(this.loginUrl,data);
}
}
