import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { BreadcrumbsComponent } from './breadcrumbs.component'
import { DebugElement } from '@angular/core';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent
  let fixture: ComponentFixture<BreadcrumbsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain nav', () => {
    const breadcrumbsDE: DebugElement = fixture.debugElement
    const navDE = breadcrumbsDE.query(By.css('nav'))
    expect(navDE).toBeTruthy()
  })

  it('should contain list of items', () => {
    const breadcrumbsDE: DebugElement = fixture.debugElement
    const navDE = breadcrumbsDE.query(By.css('ol'))
    expect(navDE).toBeTruthy()
  })

  it('should contain Courses navigation item', () => {
    const breadcrumbsDE: DebugElement = fixture.debugElement
    const navDE = breadcrumbsDE.query(By.css('.breadcrumb-item:first-child'))
    const liElement: HTMLElement = navDE.nativeElement

    expect(liElement.textContent).toContain('Courses')
  })
})
