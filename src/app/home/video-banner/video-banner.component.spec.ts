import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBannerComponent } from './video-banner.component';

describe('VideoBannerComponent', () => {
  let component: VideoBannerComponent;
  let fixture: ComponentFixture<VideoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
