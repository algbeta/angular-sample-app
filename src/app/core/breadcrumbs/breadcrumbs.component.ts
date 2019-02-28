import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterLink
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Breadcrumb[];
  private isLoggedIn: Observable<boolean>;
  
  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLoggedIn = this.authService.isAuthentificated();
  }

  ngOnInit() {
    let breadcrumb: Breadcrumb = {
      label: 'Home',
      url: ''
    };

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs();
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      });
  }

  private getBreadcrumbs() {
    const breadcrumbs: Breadcrumb[] = [];
    let children: ActivatedRoute[] = this.route.root.children;
    for (let child of children) {
      let routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      let childBreadcrumb: Breadcrumb = {
        label: child.snapshot.data['breadcrumb'],
        url: routeURL
      };
      breadcrumbs.push(childBreadcrumb);
    }
    return breadcrumbs;
  }
}

export interface Breadcrumb {
  label: string;
  url: string;
}
