import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoursesComponent } from './courses.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from '../menu/menu.component';
import { SearchComponent } from '../search/search.component';
import { CourseComponent } from '../course/course.component';
import { FormsModule } from '@angular/forms';
import { CourseDescriptionComponent } from '../course-description/course-description.component';

describe('CoursesComponent without nested components', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data onInit', () => {
    component.ngOnInit();
    expect(component.courses.length).toBeGreaterThan(0);
  });

  it('should generate proper layout', () => {
    const de: DebugElement = fixture.debugElement;
    const menuDe = de.query(By.css('app-menu'));
    const appCourseDe = de.query(By.css('app-course'));
    const appBtnDe = de.query(By.css('app-button'));
    expect(menuDe).toBeTruthy();
    expect(appCourseDe).toBeTruthy();
    expect(appBtnDe).toBeTruthy();
  });
});

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        MenuComponent,
        SearchComponent,
        CourseComponent,
        CourseDescriptionComponent
      ],
      imports: [SharedModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a list of courses', () => {
    const de: DebugElement = fixture.debugElement;
    const coursesDe = de.queryAll(By.css('app-course'));
    expect(coursesDe.length).toEqual(component.courses.length);
  });
});
