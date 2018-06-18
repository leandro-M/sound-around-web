import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionArtistVisibleComponent } from './region-artist-visible.component';

describe('RegionArtistVisibleComponent', () => {
  let component: RegionArtistVisibleComponent;
  let fixture: ComponentFixture<RegionArtistVisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionArtistVisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionArtistVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
