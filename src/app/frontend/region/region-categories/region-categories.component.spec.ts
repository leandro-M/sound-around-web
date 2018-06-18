import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCategoriesComponent } from './region-categories.component';

describe('RegionCategoriesComponent', () => {
  let component: RegionCategoriesComponent;
  let fixture: ComponentFixture<RegionCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
