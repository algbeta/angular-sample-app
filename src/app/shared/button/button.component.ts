import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() type: 'button' | 'submit';
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  onClick(ev) {
    ev.stopPropagation();
    this.click.emit(ev);
  }
  ngOnInit() {}
}
