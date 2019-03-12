import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Course from 'src/app/models/course';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() course: Course;
  @Output() click: EventEmitter<Course> = new EventEmitter<Course>();

  courseForm = this.fb.group({
    name: ['', Validators.required],
    date: [''],
    length: [0],
    isTopRated: [false],
    description: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.courseForm.patchValue(this.course);
  }
}
