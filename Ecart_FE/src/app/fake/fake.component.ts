import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.scss']
})
export class FakeComponent implements OnInit {
addtocart(arg0: any) {
throw new Error('Method not implemented.');
}
  constructor(private Fs: FakeService,private as:ApiService) { }
  isLoading = true;
  data:any=[]
  products: any = [];
  ngOnInit(): void {

    this.isLoading = true;
    console.log("Called");

    this.Fs.getAllProducts().subscribe((x) => {
      console.log(x);
      this.products = x;
      console.log(this.products);
      setTimeout(() => {
        // code to execute after 1 second
        this.isLoading = false; // hide spinner
      }, 100);
    }, (error: any) => {
      console.log('Error fetching products data:', error);
      this.isLoading = false; // set isLoading to false on error
    })

    this.as.getAllproducts().subscribe((x) => {
      console.log(x);
      this.data = x;
      console.log(this.products);
      setTimeout(() => {
        // code to execute after 1 second
        this.isLoading = false; // hide spinner
      }, 100);
    }, (error: any) => {
      console.log('Error fetching products data:', error);
      this.isLoading = false; // set isLoading to false on error
    })

  }

 



  }

