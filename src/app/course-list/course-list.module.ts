import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CourseDescriptionComponent } from './course-description/course-description.component';

@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    MenuComponent,
    SearchComponent,
    CourseDescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CoursesComponent,
    CourseComponent
  ]
})
export class CourseListModule { }
