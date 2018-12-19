import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `
    <app-button
      label="test button"
      type="button"
      (click)="onClick($event)"
    ></app-button>
  `
})
class TestComponent {
  public mockVar: number = 0;
  public onClick() {
    this.mockVar = 1;
  }
}

describe('ButtonComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent, TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create button', () => {
    const de: DebugElement = fixture.debugElement;
    const btnDe = de.query(By.css('button'));

    expect(btnDe).toBeTruthy();
    expect(btnDe.nativeElement.textContent).toEqual('test button');
    expect(btnDe.properties.type).toEqual('button');
  });

  it('should call handler btn click', () => {
    const de: DebugElement = fixture.debugElement;
    const btnDe = de.query(By.css('button'));

    expect(component.mockVar).toBeFalsy();
    btnDe.nativeElement.click();
    expect(component.mockVar).toBeTruthy();
  });
});
