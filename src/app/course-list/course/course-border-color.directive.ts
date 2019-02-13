import { Directive, Input, HostBinding } from '@angular/core';
import Course from '../../models/course';

@Directive({
  selector: '[appCourseBorderColor]'
})
export class CourseBorderColorDirective {
  private _appCourseBorderColor: Course;
  @HostBinding('style.borderColor') borderColor: string;

  @Input() set appCourseBorderColor(value: Course) {
    this._appCourseBorderColor = value;
    if (!this._appCourseBorderColor || !this._appCourseBorderColor.date) return;
    const timeDiff = Date.now() - this._appCourseBorderColor.date.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays <= 14) {
      this.borderColor = 'green'
    }

    if (diffDays < 0) {
      this.borderColor = 'blue'
    }
  }
}
