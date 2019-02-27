import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() searchPhrase: string;
  @Output() setSearchPhrase: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  setSearchPhraseHandler(ev) {
    this.setSearchPhrase.emit(ev);
  }
}
