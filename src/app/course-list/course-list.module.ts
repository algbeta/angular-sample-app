import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseBorderColorDirective } from './course/course-border-color.directive';
import { ModalComponent } from './modal/modal.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { EditCourseFormComponent } from './edit-course-form/edit-course-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { CoursesRoutesModule } from './course-routing.module';
import { DateInputComponent } from './course-form/date-input/date-input.component';
import { DurationInputComponent } from './course-form/duration-input/duration-input.component';
import { OnlyNumbersValidatorDirective } from './course-form/duration-input/only-numbers-validator.directive';

@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    MenuComponent,
    SearchComponent,
    CourseDescriptionComponent,
    CourseBorderColorDirective,
    ModalComponent,
    CourseFormComponent,
    EditCourseFormComponent,
    NewCourseFormComponent,
    DateInputComponent,
    DurationInputComponent,
    OnlyNumbersValidatorDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesRoutesModule
  ],
  exports: [
    CoursesComponent,
    CourseComponent
  ]
})
export class CourseListModule { }
