import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  login: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  authenticate() {
    if(this.authService.login({ login: this.login, password: this.password })) {
      this.router.navigate(['/courses']);
    }
    console.log('logged in successfully');
  }
}
