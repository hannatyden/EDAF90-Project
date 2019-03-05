import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFoodPageComponent } from './select-food-page.component';

describe('SelectFoodPageComponent', () => {
  let component: SelectFoodPageComponent;
  let fixture: ComponentFixture<SelectFoodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFoodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
