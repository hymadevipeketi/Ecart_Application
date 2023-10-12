import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = { username: "", password: "" }
  errorMsg = "";
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {}

  login() {
    if(!this.data.username || !this.data.password) {
      this.errorMsg = "Please enter both username and password!";
      return;
    }
    console.log(this.data)
    this.auth.login(this.data.username, this.data.password).subscribe((result: any) => {
      if (result.success) {
        console.log(result.data[0].userid);
        sessionStorage.setItem("userId",result.data[0].userid)
        this.router.navigate(['/header']);
        console.log('login success')
      } else {
        this.errorMsg = result.message;
      }
    });
  }
}