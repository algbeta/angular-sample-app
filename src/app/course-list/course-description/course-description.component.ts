import { Component, OnInit, Input } from '@angular/core';
import Course from '../../models/course';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss']
})
export class CourseDescriptionComponent implements OnInit {
  @Input() course: Course;

  constructor() {}

  ngOnInit() {}
}
