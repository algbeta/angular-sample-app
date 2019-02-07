import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListModule } from './course-list/course-list.module';
import { CoursesComponent } from './course-list/courses/courses.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { CourseFormComponent } from './course-list/course-form/course-form.component';
import { EditCourseFormComponent } from './course-list/edit-course-form/edit-course-form.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/:id', component: EditCourseFormComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CourseListModule, CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
