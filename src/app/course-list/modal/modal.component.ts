import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private open: boolean = false;
  private courseId: string = '';
  @Output() handlerOnConfirm: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

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
    this.handlerOnConfirm.emit(this.courseId);
    this.open = false;
  }
}
