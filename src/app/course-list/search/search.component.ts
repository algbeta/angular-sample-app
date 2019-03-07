import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import { SearchCourses } from 'src/app/actions/course.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchPhrase$: Observable<string>;

  constructor(private store: Store<State>) {
    this.searchPhrase$ = this.store.pipe(select('courses', 'query'));
  }

  updateSearchValue(value: string) {
    this.store.dispatch(new SearchCourses(value));
  }
}
