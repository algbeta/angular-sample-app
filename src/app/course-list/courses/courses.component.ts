import { Component, OnInit } from '@angular/core';
import Course from '../../models/course';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  constructor(private route: ActivatedRoute, private store: Store<State>) {
    this.courses$ = this.store.pipe(select('courses', 'items'));
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

  loadMore() {
    this.store.dispatch(new LoadMoreCourses());
  }
}
