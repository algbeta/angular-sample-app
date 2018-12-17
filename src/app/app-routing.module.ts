import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListModule } from './course-list/course-list.module';
import { CoursesComponent } from './course-list/courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CourseListModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
