import { Component, OnInit } from '@angular/core';
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
    private store: Store<State>
  ) {}

  ngOnInit() {}

  authenticate() {
    const payload = {
      login: this.login,
      password: this.password
    }

    this.store.dispatch(new Login(payload));
  }
}
