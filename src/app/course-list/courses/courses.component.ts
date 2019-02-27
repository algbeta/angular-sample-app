import { Component, OnInit } from '@angular/core';
import Course from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Subject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  searchPhrase$: Subject<string> = new Subject<string>();
  loadedPages: number = 0;
  constructor(private courseService: CourseService, private route: ActivatedRoute) {
    this.courseService.search(this.searchPhrase$).subscribe(courses$ => {
      this.courses$ = courses$
    });
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courses$ = this.route.paramMap.pipe(
      switchMap(() => {
        return this.courseService.getList(this.loadedPages);
      })
    );
  }

  deleteCourse(courseId: string): void {
    this.courseService.removeItem(courseId).subscribe();
    this.getCourses();
  }

  setSearchPhrase(phrase: string) {
    this.searchPhrase$.next(phrase);
  }

  loadMore() {
    this.loadedPages++;
    this.courses$ = this.courseService.getList(this.loadedPages);
  }
}
