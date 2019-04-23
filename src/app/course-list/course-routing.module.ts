import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { EditCourseFormComponent } from './edit-course-form/edit-course-form.component';
import { AuthGuardService } from '../services/auth-guard.service';

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    data: [{ breadcrumb: 'Courses' }],
    canActivate: [AuthGuardService]
  },
  {
    path: 'courses/new',
    component: CourseFormComponent,
    data: [{ breadcrumb: 'New Course' }],
    canActivate: [AuthGuardService]
  },
  {
    path: 'courses/:id',
    component: EditCourseFormComponent,
    data: [{ breadcrumb: 'Edit Course' }],
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutesModule {}
