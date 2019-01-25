import { Component, OnInit } from '@angular/core';
import Course from '../../models/course'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  searchPhrase: string = '';
  constructor() {}

  ngOnInit() {
   
  }

  deleteCourse(courseId) {
    console.log(`Courses component's delete course is called: ${courseId}`);
  }

  setSearchPhrase(phrase) {
    this.searchPhrase = phrase
  }

  loadMore() {
    console.log('Load more is called');
  }
}
