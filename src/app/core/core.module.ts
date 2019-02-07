import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component'
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {}
