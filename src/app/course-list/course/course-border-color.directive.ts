import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import Course from '../../models/course';

@Directive({
  selector: '[appCourseBorderColor]'
})
export class CourseBorderColorDirective implements OnInit{
  @Input() appCourseBorderColor: Course;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.appCourseBorderColor || !this.appCourseBorderColor.creationDate) return;
    const timeDiff = Date.now() - this.appCourseBorderColor.creationDate.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays <= 14) {
      this.el.nativeElement.style.borderColor = 'green'
    }

    if (diffDays < 0) {
      this.el.nativeElement.style.borderColor = 'blue'
    }
  }
}
