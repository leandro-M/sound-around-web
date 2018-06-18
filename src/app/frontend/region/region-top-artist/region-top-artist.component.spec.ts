import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTopArtistComponent } from './region-top-artist.component';

describe('RegionTopArtistComponent', () => {
  let component: RegionTopArtistComponent;
  let fixture: ComponentFixture<RegionTopArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionTopArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionTopArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
