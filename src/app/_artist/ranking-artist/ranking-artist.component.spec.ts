import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingArtistComponent } from './ranking-artist.component';

describe('RankingArtistComponent', () => {
  let component: RankingArtistComponent;
  let fixture: ComponentFixture<RankingArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
