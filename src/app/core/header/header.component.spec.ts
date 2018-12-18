import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';

describe('HeaderComponent with nested component dependencies included', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [SharedModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('logOff btn click should call component method', () => {
    spyOn(<any>HeaderComponent.prototype, 'logOff'); 
    const headerDe: DebugElement = fixture.debugElement;
    const logOffBtnDe = headerDe.query(By.css('.logoff-btn'));
    
    logOffBtnDe.triggerEventHandler('click', null);
    expect(HeaderComponent.prototype.logOff).toHaveBeenCalled()
  })
})

describe('HeaderComponent without nested components', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents()
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain logo', () => {
    const headerDe: DebugElement = fixture.debugElement;
    const logoDe = headerDe.query(By.css('.navbar-brand'));
    const p: HTMLElement = logoDe.nativeElement;
    expect(p.textContent).toEqual('Logo');
  })

  it('should contain login link', () => {
    const headerDe: DebugElement = fixture.debugElement;
    const userLoginDe = headerDe.query(By.css('.user-login'));
    const p: HTMLElement = userLoginDe.nativeElement;
    expect(p.textContent).toEqual('User login');
  })

  it('should contain logoff button', () => {
    const headerDe: DebugElement = fixture.debugElement;
    const logoffBtnDe = headerDe.query(By.css('app-button'))
    expect(logoffBtnDe.attributes.label).toEqual('Log off')
    expect(logoffBtnDe.attributes.type).toEqual('button')
  })
})
