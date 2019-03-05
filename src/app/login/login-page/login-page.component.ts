import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../actions/auth.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  login: string = '';
  password: string = '';
  constructor(
    // private authService: AuthService,
    // private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit() {}

  authenticate() {
    const payload = {
      login: this.login,
      password: this.password
    }

    this.store.dispatch(new Login(payload));

    /*this.authService.login(
      { login: this.login, password: this.password },
      () => {
        this.router.navigate(['/courses']);
      },
      () => {
        alert('Problem with login!');
      }
    );*/
  }
}
