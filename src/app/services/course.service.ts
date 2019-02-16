import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Course from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'http://localhost:3004/courses';
  private quantityPerRequest: number = 3;
  private courses;
  constructor(private http: HttpClient) {}

  getList(start?: number): Observable<Course[]> {
    const url: string = start || start === 0
      ? `${this.courseUrl}\?start=${0}&count=${this.quantityPerRequest*(start + 1)}`
      : this.courseUrl;
    return this.http.get<Course[]>(url);
  }

  createItem(course: Course): Observable<Course> {
    course.id = `${course.name}-${this.courses.length}`;
    this.courses.push(course);
    return of(course);
  }

  getItemById(id: string): Observable<Course> {
    return this.getList().pipe(
      map((courses: Course[]) => courses.find((course) => course.id === id))
    );
  }

  removeItem(id: string): Observable<Course[]> {
    const index = this.courses.findIndex((item) => item.id === id);
    const copy = [...this.courses];
    if (index !== -1) {
      copy.splice(index, 1);
      this.courses = copy;
      return of(this.courses);
    }

    return of(this.courses);
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
