import { Directive, ElementRef, Input, OnInit, HostBinding } from '@angular/core';
import Course from '../../models/course';

@Directive({
  selector: '[appCourseBorderColor]'
})
export class CourseBorderColorDirective implements OnInit{
  @Input() appCourseBorderColor: Course;
  @HostBinding('style.borderColor') borderColor: string;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.appCourseBorderColor || !this.appCourseBorderColor.creationDate) return;
    const timeDiff = Date.now() - this.appCourseBorderColor.creationDate.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays <= 14) {
      this.borderColor = 'green'
    }

    if (diffDays < 0) {
      this.borderColor = 'blue'
    }
  }
}
