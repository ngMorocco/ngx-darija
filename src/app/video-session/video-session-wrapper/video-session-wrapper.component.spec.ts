import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSessionWrapperComponent } from './video-session-wrapper.component';

describe('VideoSessionWrapperComponent', () => {
  let component: VideoSessionWrapperComponent;
  let fixture: ComponentFixture<VideoSessionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSessionWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSessionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
