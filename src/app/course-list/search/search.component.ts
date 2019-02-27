import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchPhrase: string;
  @Output() setSearchPhrase: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  updateSearchValue(value: string) {
    console.log(value);
    this.setSearchPhrase.emit(value);
  }
}
