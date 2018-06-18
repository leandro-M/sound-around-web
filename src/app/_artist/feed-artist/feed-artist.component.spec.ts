import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedArtistComponent } from './feed-artist.component';

describe('FeedArtistComponent', () => {
  let component: FeedArtistComponent;
  let fixture: ComponentFixture<FeedArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
