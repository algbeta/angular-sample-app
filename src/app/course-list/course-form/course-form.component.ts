import { Component, OnInit, Input } from '@angular/core';
import Course from 'src/app/models/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() course: Course;
  constructor() {}

  ngOnInit() {
    console.log(this.course);
  }
}
