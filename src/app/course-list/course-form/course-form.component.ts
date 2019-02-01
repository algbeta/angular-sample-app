import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Course from 'src/app/models/course';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  course$: Observable<Course>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseService
  ) { }

  ngOnInit() {
  }

}
