import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData$: Observable<string>;
  isAuthenticated$: Observable<boolean>;

  constructor(
    public authService: AuthService,
    private router: Router,
    private store: Store<State>
  ) {
    this.userData$ = this.store.pipe(select('auth', 'user', 'username'))
    this.isAuthenticated$ = this.store.pipe(select('auth', 'isAuthenticated'));
  }

  ngOnInit() {}

  logOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
