import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Input } from '@angular/core';
import Course from '../../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToCourseForm() {
    this.router.navigate(['/course-edit', this.course.id]);
  }
}
