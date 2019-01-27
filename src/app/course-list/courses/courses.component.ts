import { Component, OnInit } from '@angular/core';
import Course from '../../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  searchPhrase: string = '';
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courses = this.courseService.getList();
  }

  deleteCourse(courseId) {
    this.courseService.removeItem(courseId);
    this.getCourses()
  }

  setSearchPhrase(phrase) {
    this.searchPhrase = phrase;
  }

  loadMore() {
    console.log('Load more is called');
  }
}
