import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionArtistNewsComponent } from './region-artist-news.component';

describe('RegionArtistNewsComponent', () => {
  let component: RegionArtistNewsComponent;
  let fixture: ComponentFixture<RegionArtistNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionArtistNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionArtistNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
