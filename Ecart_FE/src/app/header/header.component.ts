


import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{




  
@Input() data:any;

  searchForm!: FormGroup;
  productsData:any=[];
  constructor(private productService: ProductService,private cs:CartService,private as:ApiService) {
    this.searchForm = new FormGroup({
      searchField: new FormControl('')
    });

  }
  total:any;
  count:any
  ngOnInit(){
     this.cs.cartCount.subscribe((x:any)=>
     {
      this.count=console.log(x);
      
     })
     console.log(this.count);
     
  }
  searchProduct() {
    this.productService.searchProducts(this.searchForm.value.searchField).subscribe(products => {
      this.productService.next(products)  
      this.productsData=products
      console.log(this.productsData); 
      this.as.show.next(false);
    });
  }
  // searchtype() {
  //   this.productService.searchtype(this.searchForm.value.searchField).subscribe(products => {
  //     this.productService.next(products)  
  //     this.productsData=products
  //     console.log(this.productsData); 
  //     this.as.show.next(false);
  //   });
  // }
  // searchname() {
  //   this.productService.searchname(this.searchForm.value.searchField).subscribe(products => {
  //     this.productService.next(products)  
  //     this.productsData=products
  //     console.log(this.productsData); 
  //     this.as.show.next(false);
  //   });
  // }
 
}

