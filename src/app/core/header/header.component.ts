import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData: string;
  isAuthenticated: Observable<boolean>;

  constructor(public authService: AuthService, private router: Router) {
    authService
      .getUserInfo()
      .subscribe((userData) => (this.userData = userData));

    this.isAuthenticated = authService.isAuthentificated();
  }

  ngOnInit() {}

  logOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
