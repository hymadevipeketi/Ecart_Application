import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-registraton',
  templateUrl: './registraton.component.html',
  styleUrls: ['./registraton.component.scss']
})
export class RegistratonComponent implements OnInit{
  
  registrationForm: any;
  userdata:any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  
  ngOnInit(){
    this.registrationForm = this.formBuilder.group({
      //id:['',Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      uname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  onSubmit() {
 
      const userData = {
      //  id:this.registrationForm.controls.id.value,
        fname:  this.registrationForm.controls.fname.value,
        lname: this.registrationForm.controls.lname.value,
        uname: this.registrationForm.controls.uname.value,
        email: this.registrationForm.controls.email.value,
        password: this.registrationForm.controls.password.value,
        address: this.registrationForm.controls.address.value,
        phone: this.registrationForm.controls.phone.value,
      }
      console.log(userData);
      
      this.http.post('http://172.17.15.254:9595/register', userData).subscribe(
        (response:any) => {
          console.log(response);
        },
        
      );
  }
}