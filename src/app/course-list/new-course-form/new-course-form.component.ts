import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Course from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent implements OnInit {
  constructor(private service: CourseService) {}

  ngOnInit() {}

  createCourse(course: Course) {
    this.service.createItem(course);
  }
}
