import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistVisibleComponent } from './artist-visible.component';

describe('ArtistVisibleComponent', () => {
  let component: ArtistVisibleComponent;
  let fixture: ComponentFixture<ArtistVisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistVisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
