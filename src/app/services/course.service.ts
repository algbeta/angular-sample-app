import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, debounce, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import Course from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'http://localhost:3004/courses';
  private courses;
  constructor(private http: HttpClient) {}

  getList(start: number, quantityPerRequest: number): Observable<Course[]> {
    const url: string =
      start || start === 0
        ? `${this.courseUrl}\?start=${0}&count=${quantityPerRequest *
            (start + 1)}`
        : this.courseUrl;
    return this.http.get<Course[]>(url);
  }

  createItem(course: Course): Observable<Course> {
    return this.http.post<Course>(this.courseUrl, course);
  }

  getItemById(id: string): Observable<Course> {
    const item = this.getList(0, 0).pipe(
      map((courses: Course[]) => courses.find((course) => course.id === id))
    );
    return item;
  }

  search(searchPhrase: Observable<string>) {
   return (searchPhrase.pipe(debounce(() => timer(500))).pipe(distinctUntilChanged()).pipe(switchMap(value => {
     const values = this.searchCourses(value);
     return of(values);
    })));
  }

  searchCourses(searchPhrase: string) {
    return this.http.get<Course[]>(
      `${this.courseUrl}?textFragment=${searchPhrase}`
    );
  }

  removeItem(id: string): Observable<{}> {
    return this.http.delete(`${this.courseUrl}/${id}`);
  }

  updateItem(course: Course): Observable<Boolean> {
    const index = this.courses.findIndex((item) => item.id === course.id);
    const copy = [...this.courses];
    if (index !== -1) {
      copy.splice(index, 1, course);
      this.courses = copy;
      return of(true);
    }

    return of(false);
  }
}
