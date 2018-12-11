import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() type: 'button' | 'submit';
  @Output() clickHandler: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  onClick(ev) {
    this.clickHandler.emit(ev);
  }
  ngOnInit() {}
}
