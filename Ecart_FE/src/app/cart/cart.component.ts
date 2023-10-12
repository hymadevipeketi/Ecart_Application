
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../services/cart.service'; 


// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {

//   public products : any = [];
//   public grandTotal !: number;
//   constructor(private cartService : CartService) { }

//   ngOnInit(): void {
//     this.cartService.getProducts()
//     .subscribe((res: any)=>{
//       this.products = res;
//       console.log(this.products);
//       // this.grandTotal = this.cartService.getTotalPrice();
//     })
//   }
//   removeItem(item: any){
//     if(confirm('are you sure delete?'))
//     this.cartService.removeCartItem(item);
//     alert("item deleted succes fully")
    
//   }
//   emptycart(){
//     this.cartService.removeAllCart();
//   }

// }



import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable, map } from 'rxjs';
import { ProductService } from '../header/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  [x: string]: any;
  public products: any = [];
  visible!: boolean;


  public grandTotal!: number;
  cartItems: any=[]

  constructor(private cartService: CartService,private ps:ProductService) { }
count:any
  ngOnInit(): void {
  

  this.cartService.getCartItemsById().subscribe((x:any)=>
  {
    this.cartItems=x;
    this.count=this.cartItems.data.length;
    console.log(this.count);
    
    this.cartService.cartCount.next(this.count);
  })
  }
 

  removeItem(item: any) {
    if (confirm('Are you sure you want to delete this item?')) {
      console.log(item);
      
      this.cartService.removeCartItem(item).subscribe((x:any)=>
      {
        console.log(x);
        
      })
    }
    this.ngOnInit();
  }
//   calculateTotal(): number {
//   let total = 0;
//   for (let item of this.cartItems.data) {
//     total += item.quantity * item.price;
//   }
//   return total;
// }
calculateTotal(): number {
  if (!this.cartItems || !this.cartItems.data) {
    return 0;
  }

  let total = 0;
  for (let item of this.cartItems.data) {
    total += item.quantity * item.price;
  }
  return total;
}

  emptyCart() {
    if (confirm('Are you sure you want to empty your cart?')) {
      this.cartService.removeAllCart();
    }
  }
  

data1:any=[]
  showDialog(data:any) {
    this.visible = true;
    console.log(data);
    console.log(this.cartItems.data);
    
console.log(this.cartItems.data.filter((ele: any)=>ele.productid ==data))
this.data1= this.cartItems.data.filter((ele: any)=>ele.productid ==data)
  
    
}
// getImageSource(imageData: string): string {
//   if (imageData) {
//     const extension = imageData.substr(imageData.indexOf('/') + 1, imageData.indexOf(';') - imageData.indexOf('/') - 1);
//     return `data:image/${extension};base64,${imageData}`;
//   } else {
//     return '../../assets/data-image.png'; // Provide a fallback image path if the image data is missing or invalid
//   }
// }
getBase64Image(imageData: string): string {
  return 'data:image/jpeg;base64,' + imageData; // Replace 'jpeg' with 'png' if the image is in PNG format
}
checkout(): void {
  // Redirect to the address page for checkout
  // Redirect to the address page for checkout
  this['router'].navigate(['/address']);
} 

}

