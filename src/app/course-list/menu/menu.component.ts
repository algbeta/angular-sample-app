import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() setSearchPhrase: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  setSearchPhraseHandler(ev) {
    this.setSearchPhrase.emit(ev);
  }
}
