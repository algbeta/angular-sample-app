import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import Course from '../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  constructor() {}

  ngOnInit() {}
}
