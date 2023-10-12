import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  address: any = {
    firstName: '',
    lastName: '',
    pinCode: '',
    flatName: '',
    colony: '',
    landmark: '',
    state: '',
    addressType: ''
  };

  constructor(private router: Router) {}

  saveAddress(): void {
    // Save the address details and proceed to the payment page
    // You can perform validation and API calls here as needed

    this.router.navigate(['/payment']);
  }
}
