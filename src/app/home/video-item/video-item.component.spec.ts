import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVideoItemComponent } from './video-item.component';

describe('VideoItemComponent', () => {
  let component: YtVideoItemComponent;
  let fixture: ComponentFixture<VideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
