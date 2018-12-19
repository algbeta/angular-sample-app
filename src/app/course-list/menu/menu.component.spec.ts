import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { MenuComponent } from './menu.component'

describe('MenuComponent tests without nested components', () => {
  let component: MenuComponent
  let fixture: ComponentFixture<MenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain search and button', () => {
    const menuDe: DebugElement = fixture.debugElement
    const searchDe = menuDe.query(By.css('app-search'))
    const btnDe = menuDe.query(By.css('app-button'))

    expect(searchDe).toBeTruthy()
    expect(btnDe).toBeTruthy()
    expect(btnDe.attributes.label).toEqual('Add course')
  })
})

describe('Menu components with dependencies', () => {
  let component: MenuComponent
  let fixture: ComponentFixture<MenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [SharedModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should call proper method on btn click', () => {
    spyOn(<any>MenuComponent.prototype, 'search'); 
    const headerDe: DebugElement = fixture.debugElement;
    const searchBtnDe = headerDe.query(By.css('.menu-search-btn'));
    
    searchBtnDe.triggerEventHandler('click', null);
    expect(MenuComponent.prototype.search).toHaveBeenCalled();
  })
})
