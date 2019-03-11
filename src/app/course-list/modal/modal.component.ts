import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { DeleteCourse } from 'src/app/actions/course.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  open: boolean = false;
  private courseId: string = '';
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  show(courseId: string): void {
    this.open = true;
    this.courseId = courseId;
  }

  hide(): void {
    this.open = false;
    this.courseId = '';
  }

  confirm(): void {
    this.store.dispatch(new DeleteCourse(this.courseId))
    this.open = false;
  }
}
