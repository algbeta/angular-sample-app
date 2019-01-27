import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private open: Boolean = true;
  constructor() {}

  ngOnInit() {}

  toggle(): void {
    this.open = !this.open;
  }
}
