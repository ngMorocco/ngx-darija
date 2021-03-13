import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVideoPlayerComponent } from './yt-video-player.component';

describe('YtVideoPlayerComponent', () => {
  let component: YtVideoPlayerComponent;
  let fixture: ComponentFixture<YtVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtVideoPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
