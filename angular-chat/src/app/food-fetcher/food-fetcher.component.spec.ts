import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFetcherComponent } from './food-fetcher.component';

describe('FoodFetcherComponent', () => {
  let component: FoodFetcherComponent;
  let fixture: ComponentFixture<FoodFetcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodFetcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
