import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private login: string = '';
  private password: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  authenticate() {
    this.authService.login({ login: this.login, password: this.password });
    console.log('logged in successfully');
  }
}
