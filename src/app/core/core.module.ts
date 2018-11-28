import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, CoursesComponent, CourseComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
