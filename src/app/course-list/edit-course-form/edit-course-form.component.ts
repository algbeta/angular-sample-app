import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable, of } from 'rxjs';
import Course from 'src/app/models/course';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: ['./edit-course-form.component.scss']
})
export class EditCourseFormComponent implements OnInit {
  course$: Observable<Course>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseService,
    private store: Store<State>
  ) {}

  

  ngOnInit() {
    // since user gets to this page from the courses list
    // I assume the course is loaded already
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.store.pipe(
          select('courses', 'items'),
          switchMap((items) =>
            of(items.find((item) => item.id == params.get('id')))
          )
        );
      })
    );
  }

  /*updateCourse(course: Course) {
    // haven't updated
    if (this.service.updateItem(course)) {
      this.router.navigate(['/courses']);
    }
  }*/
}
