import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListModule } from './course-list.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { EditCourseFormComponent } from './edit-course-form/edit-course-form.component';

const coursesRoutes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/:id', component: EditCourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
