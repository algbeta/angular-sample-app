import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Course from 'src/app/models/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() course: Course;
  @Output() click: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {
    console.log(this.course);
  }
}
