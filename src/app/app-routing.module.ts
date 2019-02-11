import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { CoursesComponent } from './course-list/courses/courses.component';
import { CourseFormComponent } from './course-list/course-form/course-form.component';
import { EditCourseFormComponent } from './course-list/edit-course-form/edit-course-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'courses',
    component: CoursesComponent
    /*children: [
      { path: '', component: CoursesComponent, data: [{ breadcrumb: 'Courses'}] },
      { path: 'new', component: CourseFormComponent, data: [{ breadcrumb: 'New Course'}] },
      { path: ':id', component: EditCourseFormComponent, data: [{ breadcrumb: 'Edit Course'}] }
    ]*/
  },
  {
    path: 'courses/new',
    component: CourseFormComponent,
    data: { breadcrumb: 'New Course' }
  },
  {
    path: 'courses/:id',
    component: EditCourseFormComponent,
    data: { breadcrumb: 'Edit Course' }
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
