import {
  Component,
  Input,
  EventEmitter,
  Output,
  AfterContentInit,
} from '@angular/core';
import Course from 'src/app/models/course';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { dateFormatValidator } from './date-input/date-input.component'

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  providers: [DatePipe],
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements AfterContentInit {
  @Input() course: Course;
  @Output() click: EventEmitter<Course> = new EventEmitter<Course>();

  public courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    date: ['', [Validators.required, dateFormatValidator()]],
    length: ['', [Validators.required]],
    isTopRated: [false],
    description: ['', [Validators.required, Validators.maxLength(500)]],
  });

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

  ngAfterContentInit() {
    this.courseForm.setValue({
      name: this.course.name,
      date:
        this.course.date &&
        this.datePipe.transform(this.course.date, 'dd/MM/yyyy'),
      length: this.course.length,
      description: this.course.description,
      isTopRated: this.course.isTopRated,
    });
  }
}
