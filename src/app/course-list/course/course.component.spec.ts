import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, Output, EventEmitter } from '@angular/core'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'

import { SharedModule } from 'src/app/shared/shared.module'
import { CourseComponent } from './course.component'
import Course from '../../models/course'
import { CourseDescriptionComponent } from '../course-description/course-description.component';
import { CourseListModule } from '../course-list.module';

@Component({
  template: `
    <app-course
      [course]="course"
      (deleteCourse)="deleteCourse($event)"
    ></app-course>
  `
})
class TestComponent {
  public course: Course = {
    id: 'hash1',
    title: 'course1',
    creationDate: new Date(2018, 9),
    duration: 132,
    description: 'very nice film'
  }
  public deletedCourse: string
  public deleteCourse(courseId: string) {
    this.deletedCourse = courseId
  }
}
describe('CourseComponent without nested components', () => {
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CourseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain app-course-description', () => {
    const courseDe: DebugElement = fixture.debugElement
    const descriptionDe = courseDe.query(By.css('app-course-description'))
    expect(descriptionDe.properties.course).toEqual(component.course)
  })

  it('should contain app-buttons', () => {
    const courseDe: DebugElement = fixture.debugElement
    const editBtnDe = courseDe.query(By.css('app-button:first-child'))
    const deleteBtnDe = courseDe.query(By.css('app-button:last-child'))

    expect(editBtnDe.attributes.label).toEqual('Edit')
    expect(deleteBtnDe.attributes.label).toEqual('Delete')
  })
})

describe('CourseComponent with nested components', () => {
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [SharedModule, CourseListModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should call deleteCourse handler', () => {
    const courseDe: DebugElement = fixture.debugElement
    const deleteBtnDe = courseDe.query(By.css('.delete-course-btn'))

    deleteBtnDe.triggerEventHandler('click', null)
    expect(component.deletedCourse).toEqual(component.course.id)
  })
})
