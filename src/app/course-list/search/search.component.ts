import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string  = '';
  @Output() setSearchPhrase: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  onClick() {
    console.log(this.searchValue);
    this.setSearchPhrase.emit(this.searchValue);
  }

  checkIfEmpty() {
    if (!this.searchValue) {
      this.setSearchPhrase.emit('')
    }
  }

  ngOnInit() {}
}
