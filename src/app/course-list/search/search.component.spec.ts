import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SearchComponent without nested components', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper input', () => {
    const searchDe: DebugElement = fixture.debugElement;
    const searchBtn = searchDe.query(By.css('app-button'));
    const searchInput = searchDe.query(By.css('input'));

    expect(searchBtn).toBeTruthy();
    expect(searchBtn.attributes.label).toEqual('Search');
    expect(searchBtn.attributes.type).toEqual('button');
    expect(searchInput).toBeTruthy();
  });
});

describe('Search components with dependencies', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [SharedModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call proper method on btn click', () => {
    spyOn(<any>SearchComponent.prototype, 'onClick');
    const headerDe: DebugElement = fixture.debugElement;
    const searchBtnDe = headerDe.query(By.css('.menu-search-btn'));

    searchBtnDe.nativeElement.click();
    expect(SearchComponent.prototype.onClick).toHaveBeenCalled();
  });
});

