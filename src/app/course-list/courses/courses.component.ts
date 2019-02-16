import { Component, OnInit } from '@angular/core';
import Course from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { switchMap, merge } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  courses$: Observable<Course[]>;
  selectedCourseId: string;
  searchPhrase: string = '';
  loadedPages: number = 0;
  constructor(private courseService: CourseService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courses$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedCourseId = params.get('id');
        return this.courseService.getList(this.loadedPages);
      })
    );
  }

  deleteCourse(courseId: string): void {
    this.courseService.removeItem(courseId).subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  setSearchPhrase(phrase: string) {
    this.searchPhrase = phrase;
  }

  loadMore() {
    this.loadedPages++;
    this.courses$ = this.courseService.getList(this.loadedPages);
  }
}
