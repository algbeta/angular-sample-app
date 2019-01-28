import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() setSearchPhrase: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  updateSearchValue(value: string) {
    console.log(value);
    this.setSearchPhrase.emit(value);
  }
}
