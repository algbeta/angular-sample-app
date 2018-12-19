import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { Component, Output, EventEmitter } from '@angular/core'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'

import { CourseDescriptionComponent } from './course-description.component';
import { SharedModule } from 'src/app/shared/shared.module'
import Course from '../../models/course'

@Component({
  template: `
    <app-course-description
      [course]="course"
    ></app-course-description>
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
}

describe('CourseDescriptionComponent tests', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDescriptionComponent, TestComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course data in proper format', () => {
    const courseDe: DebugElement = fixture.debugElement
    const titleDe = courseDe.query(By.css('h5'))
    const creationDateDe = courseDe.query(By.css('.course-creation-date'))
    const courseDurationDe = courseDe.query(By.css('.course-duration'))
    const courseDescriptionDe = courseDe.query(By.css('.course-description'))

    expect(titleDe.nativeElement.textContent).toEqual('course1')
    expect(creationDateDe.nativeElement.textContent).toEqual('01.10.2018')
    expect(courseDurationDe.nativeElement.textContent).toEqual('2h 12mins')
    expect(courseDescriptionDe.nativeElement.textContent).toEqual('very nice film')
  })
});
