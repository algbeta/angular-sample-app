import { Component, OnInit } from '@angular/core';
import Course from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadCourses, LoadMoreCourses } from '../../actions/course.actions';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private store: Store<State>
  ) {
    this.courses$ = this.store.pipe(select('courses', 'items'));
    /*this.courseService.search(this.searchPhrase$).subscribe((courses$) => {
      this.courses$ = courses$;
    });*/
  }

  ngOnInit() {
    this.store.dispatch(new LoadCourses());
  }

  getCourses() {
    this.route.paramMap.pipe(
      tap(() => {
        this.store.dispatch(new LoadCourses());
      })
    );
  }

  deleteCourse(courseId: string): void {
    this.courseService.removeItem(courseId).subscribe();
    this.getCourses();
  }

  /*setSearchPhrase(phrase: string) {
    if (phrase && phrase.length && phrase.length > 3) {
      this.searchPhrase$.next(phrase);
    }
  }*/

  loadMore() {
    this.store.dispatch(new LoadMoreCourses());
    //this.courses$ = this.courseService.getList(0, 3);
  }
}
