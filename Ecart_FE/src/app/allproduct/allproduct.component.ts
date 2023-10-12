import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../header/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeService } from '../fake.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent implements OnInit {
  isLoading = true;

  [x: string]: any;
  products: any = [];
  searchForm!: FormGroup;
  next: any
  count: any;
  constructor(private productService: ProductService, private cs: CartService, private as: ApiService, private service: ApiService, private route: Router,private fs:FakeService) {
    this.searchForm = new FormGroup({
      searchField: new FormControl('')
    });
  }

  ngOnInit() {
    this.service.getCartCount().subscribe((x:any)=>{
      this.count=x.count
    })
    this.isLoading = true;
    console.log("Called");
 
    this.service.getAllproducts().subscribe((res: any) => {
      this.products = res;
      console.log(this.products);
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }, (error: any) => {
      console.log('Error fetching products data:', error);
      this.isLoading = false;
    });

    // this.fs.getAllProducts().subscribe((x) => {
    //   console.log(x);
    //   this.products = x;
    //   this.count=this.products.length
    //   console.log(this.products);
    //   setTimeout(() => {
    //     // code to execute after 1 second
    //     this.isLoading = false; // hide spinner
    //   }, 100);
    // }, (error: any) => {
    //   console.log('Error fetching products data:', error);
    //   this.isLoading = false; // set isLoading to false on error
    // })


  }
  data: any = [];
  body1: any = []


  addtocart(id: any) {
    console.log(this.data);
    var userid = sessionStorage.getItem('userId');
    for (let item of this.products) {
      var productid = item.productid;
      var productname = item.productname;
      var price = item.price;
      var quantity = item.quantity;
      var producttype=item.productname;
      if (productid == id) {
        const body = {
          "userid": userid,
          "productid": productid,
          "productname": productname,
          "price": price,
          "quantity": quantity,
          "producttype":producttype,
          // "action":action
        }
        this.cs.postToCart(body).subscribe(res => {
          console.log(res);
        });
        console.log(body);
      }
    }
    console.log(this.products);
    this.ngOnInit();
  }
  productsData: any = [];
  searchProduct() {
    console.log("Hello");
    this.productService.searchProducts(this.searchForm.value.searchField).subscribe(products => {
      this.products = products
      console.log(this.productsData);
    });
  }

  // searchProduct()
  // {
  //    console.log("In");
  //   //  this.products.filter((x:any)=>x.)
  //   console.log(this.products);
  //   console.log(this.searchForm.value.searchField);
  //   const category=this.searchForm.value.searchField
  //  this.products=this.products.filter((x:any)=>x.category==category);
  //    console.log(this.products);
     
     
  // }

  
}


