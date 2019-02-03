import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListModule } from './course-list/course-list.module';
import { CoursesComponent } from './course-list/courses/courses.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { CourseFormComponent } from './course-list/course-form/course-form.component';
import { EditCourseFormComponent } from './course-list/edit-course-form/edit-course-form.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'course-edit', component: CourseFormComponent },
  { path: 'course-edit/:id', component: EditCourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CourseListModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
