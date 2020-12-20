import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListingComponent } from './video-listing.component';

describe('VideoListingComponent', () => {
  let component: VideoListingComponent;
  let fixture: ComponentFixture<VideoListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
