import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = "";
  constructor() {}

  onChange() {
    console.log(this.searchValue)
  }
  ngOnInit() {}
}
