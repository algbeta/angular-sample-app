import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Course from 'src/app/models/course';

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
    private service: CourseService
  ) { }

  ngOnInit() {
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getItemById(params.get('id')))
    );
  }
}
