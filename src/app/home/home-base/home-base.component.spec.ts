import {HomeBaseComponent} from './home-base.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {YtVideoItem} from '../../_core/models';
import {Observable, of} from 'rxjs';
import {YoutubeDataService} from '../../_core/services/youtube-data.service';
import {ServerStateService} from '../../_core/services/server-state.service';
import {Component, Input} from '@angular/core';
import {By} from '@angular/platform-browser';


const YtVideoMock: YtVideoItem[] = [
  {
    videoId: 'dummy-id',
    title: 'Angular in Darija is awesome',
    description: 'Angular in Darija well explain in Darija',
    thumbnailUrl: 'https://www.youtube.com/watch?v=ToaZsdRCc0s',
    publishedAt: new Date().toString()
  },
  {
    videoId: 'dummy-id-1',
    title: 'Angular in Darija is awesome part 2',
    description: 'Angular in Darija well explain in Darija',
    thumbnailUrl: 'https://www.youtube.com/watch?v=ToaZsdRCc0s',
    publishedAt: new Date().toString()
  },
];

@Component({
  selector: 'app-ui-spinner-basic',
  template: ''
})
export class SpinnerBasicStubComponent {
}

@Component({
  selector: 'app-video-banner',
  template: ''
})
export class VideoBannerStubComponent {
  @Input() ytVideo: YtVideoItem | null = null;
}

@Component({
  selector: 'app-video-listing',
  template: ''
})
export class AppVideoListingStubComponent {
  @Input() ytVideos: YtVideoItem[] = [];
}

@Component({
  selector: 'app-ui-error',
  template: 'Error'
})
export class ErrorStubComponent {
  @Input() errorType!: string;
}

fdescribe('HomeBaseComponent', () => {
  let component: HomeBaseComponent;
  let fixture: ComponentFixture<HomeBaseComponent>;
  let youtubeDataService: any;
  let serverStateServiceStub: Partial<ServerStateService>;
  serverStateServiceStub = {
    hydrate(key: string): (obs: Observable<any>) => Observable<any> {
      return obs => {
        return obs;
      };
    }
  };
  beforeEach(async () => {
    // Emulate call to `getAngularInDarijaVideos` and return mock value
    youtubeDataService = jasmine.createSpyObj('YoutubeDataService', ['getAngularInDarijaVideos']);
    youtubeDataService.getAngularInDarijaVideos.and.returnValue(of(YtVideoMock));
    await TestBed.configureTestingModule({
      providers: [
        {provide: YoutubeDataService, useValue: youtubeDataService},
        {provide: ServerStateService, useValue: serverStateServiceStub}],
      declarations: [HomeBaseComponent, SpinnerBasicStubComponent, AppVideoListingStubComponent,
        VideoBannerStubComponent,
        ErrorStubComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBaseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should pipe into service observable and resolve with homeVideos', (done) => {
    fixture.detectChanges();
    component?.ytVideos$?.subscribe(result => {
      expect(result.lastVideo.videoId).toEqual(YtVideoMock[1].videoId);
      expect(result.videoList.length).toEqual(2);
      done();
    });
  });

  describe('Spinner', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
    it('should start spinner onInit', () => {
      component.ngOnInit();
      expect(component.isFetchingYtVideos).toBeTrue();
    });

    it('should stop spinner when fetching data done', (done) => {
      component?.ytVideos$?.subscribe(() => {
        expect(component.isFetchingYtVideos).toBeFalse();
        done();
      });
    });
  });


  it('should display error if video list result is empty', () => {
    youtubeDataService.getAngularInDarijaVideos.and.returnValue(of([]));
    fixture.detectChanges();
    const errorElement: HTMLElement = fixture.debugElement.query(By.css('app-ui-error')).nativeElement;
    expect(errorElement).toBeDefined();
  });

});
