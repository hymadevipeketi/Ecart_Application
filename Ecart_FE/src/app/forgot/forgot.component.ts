import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {

  passwordForm: any;
  errorMsg:any;

  constructor(private fb: FormBuilder,private as:ApiService) { 
 this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      // newPassword: ['', Validators.compose([
      //   Validators.required,
      //   Validators.minLength(8),
      //   Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      // ])],
      newPassword: ['', Validators.compose([Validators.required,])],
      confirmPassword: ['', Validators.required],
    }, {
      // validators: this.matchPasswords,
      validator: this.Mustmatch('newPassword', 'confirmPassword')
    });
  }
  get password() {
    return this.passwordForm.get('newPassword');

  }
  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');

  }

  ngOnInit() {
   
  }

  Mustmatch(newPassword: any, confirmPassword: any) {
    return (formgroup: FormGroup) => {
      //delclaring the fields
      const passwordcontrol = formgroup.controls[newPassword];
      const ConfirmPasswordcontrol = formgroup.controls[confirmPassword];

      if (ConfirmPasswordcontrol.errors && !ConfirmPasswordcontrol.errors['Mustmatch']) {
        return;
      }
      if (passwordcontrol.value !== ConfirmPasswordcontrol.value) {
        ConfirmPasswordcontrol.setErrors({ Mustmatch: true });
      }
      else {
        ConfirmPasswordcontrol.setErrors(null);

      }

    };
  }
  updatePassword() {
    // implement update password logic
    const oldPassword=this.passwordForm.value.oldPassword
    console.log(this.passwordForm.value.newPassword);
    this.as.resetPassword(oldPassword).subscribe((x:any)=>
    {
      console.log(x);
      
    })
    
  }
}


