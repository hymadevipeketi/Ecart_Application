import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
//   paymentMethods: string[] = ['card', 'upi'];
//   cardNumber: string = '';
//   cardCVV: string = '';
//   cardAccount: string = '';
//   upiId: string = '';

//   makePayment() {
//     if (this.cardNumber && this.cardCVV && this.cardAccount && this.paymentMethods.includes('card')) {
//       // Perform debit/credit card payment logic here
//       console.log('Making payment through card:');
//       console.log('Card Number:', this.cardNumber);
//       console.log('CVV Number:', this.cardCVV);
//       console.log('Account Number:', this.cardAccount);
//       // Redirect to success page or display payment success message
//     } else if (this.upiId && this.paymentMethods.includes('upi')) {
//       // Perform UPI payment logic here
//       console.log('Making payment through UPI:');
//       console.log('UPI ID:', this.upiId);
//       // Redirect to success page or display payment success message
//     } else {
//       console.log('Please select a valid payment method and provide the required information');
//       // Display an error message to the user indicating they need to select a valid payment method and provide the required information
//     }
//   }

// }
// selectedPaymentOption: string = '';
// upiId: string = '';
// upiPin: string = '';
// cardNumber: string = '';
// cardCVV: string = '';
// cardAccount: string = '';

// makePayment() {
//   if (this.selectedPaymentOption === 'upi' && this.upiId && this.upiPin) {
//     // Perform UPI payment logic here
//     console.log('Making payment through UPI:');
//     console.log('UPI ID:', this.upiId);
//     console.log('UPI PIN:', this.upiPin);
//     // Redirect to success page or display payment success message
//   } else if (this.selectedPaymentOption === 'card' && this.cardNumber && this.cardCVV && this.cardAccount) {
//     // Perform debit/credit card payment logic here
//     console.log('Making payment through card:');
//     console.log('Card Number:', this.cardNumber);
//     console.log('CVV Number:', this.cardCVV);
//     console.log('Account Number:', this.cardAccount);
//     // Redirect to success page or display payment success message
//   } else if (this.selectedPaymentOption === 'cod') {
//     // Perform Cash on Delivery payment logic here
//     console.log('Making payment through Cash on Delivery');
//     // Redirect to success page or display payment success message
//   } else {
//     console.log('Please select a valid payment option and provide the required information');
//     // Display an error message to the user indicating they need to select a valid payment option and provide the required information
//   }
// }
// }

// isUpiSelected: boolean = false;
//   isCardSelected: boolean = false;
//   isCodSelected: boolean = false;

//   upiId: string = '';
//   cardNumber: string = '';
//   cvv: string = '';

//   verifyAndPay() {
//     if (this.isUpiSelected) {
//       // Process UPI payment with this.upiId
//     } else if (this.isCardSelected) {
//       // Process card payment with this.cardNumber and this.cvv
//     } else if (this.isCodSelected) {
//       // Process Cash on Delivery payment
//     }
//   }
// }



// selectedPaymentOption: string = '';
//   upiId: string = '';
//   upiPin: string = '';
//   accountNumber: string = '';
//   cvv: string = '';
//   otp: number | null = null;

//   verifyAndPay(option: string) {
//     if (option === 'upi') {
//       if (this.upiId && this.upiPin) {
//         // Verify UPI details and initiate payment
//         this.verifyUPI();
//       } else {
//         console.log('Please enter UPI ID and UPI PIN');
//       }
//     } else if (option === 'card') {
//       if (this.accountNumber && this.cvv && this.otp) {
//         // Verify Card details and OTP
//         this.verifyCardDetails();
//       } else {
//         console.log('Please enter Account Number, CVV, and OTP');
//       }
//     } else if (option === 'cash') {
//       // Process Cash on Delivery payment
//       this.payOnDelivery();
//     }
//   }

//   verifyUPI() {
//     // Make API request to verify UPI details and initiate payment
//     console.log('Verifying UPI details and initiating payment...');
//   }

//   sendOTP() {
//     // Make API request to send OTP to the user's registered phone number
//     console.log('Sending OTP to the user...');
//   }

//   verifyCardDetails() {
//     // Verify Card details and OTP
//     // Make API request to verify Card details and OTP
//     console.log('Verifying Card details and OTP...');
//   }

//   payOnDelivery() {
//     // Process Cash on Delivery payment
//     console.log('Processing Cash on Delivery payment...');
//   }
// }



selectedOption: string = '';
upiId: string = '';
accountNumber: string = '';
cvv: string = '';
showOTP: boolean = false;
otp: string = '';

proceedToUPI() {
  // Redirect to UPI app using the provided UPI ID
  // Example: window.location.href = 'upi://pay?pa=' + this.upiId + '&pn=Merchant&mc=123456';
  // Once the payment is completed, the user will be redirected back to the website
  // Handle the payment completion in the UPI callback URL
}

verifyCard() {
  // Perform verification of the account number and CVV
  // Send an OTP to the registered mobile number for verification
  // Show the OTP input field
  this.showOTP = true;
}

makePayment() {
  // Perform payment processing using the provided OTP, account number, and CVV
  // Example: Send a payment request to the payment gateway with the provided details
  // If the payment is successful, redirect to the success page
  // Otherwise, show an error message
}
}