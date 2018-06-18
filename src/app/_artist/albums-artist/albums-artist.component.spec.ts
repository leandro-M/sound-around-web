import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsArtistComponent } from './albums-artist.component';

describe('AlbumsArtistComponent', () => {
  let component: AlbumsArtistComponent;
  let fixture: ComponentFixture<AlbumsArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
