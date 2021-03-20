import { Observable, of } from 'rxjs';
import { YtVideoItem } from '@core/models';
import { ServerStateService } from '@core/services/server-state.service';
import { HomeComponent } from './home.component';

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
  }
];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let youtubeDataService: any;
  const serverStateServiceStub = {
    hydrate(key: string): (obs: Observable<any>) => Observable<any> {
      return obs => {
        return obs;
      };
    }
  } as ServerStateService;

  beforeEach(() => {
    // Emulate call to `getAngularInDarijaVideos` and return mock value
    youtubeDataService = jasmine.createSpyObj('YoutubeDataService', [
      'getAngularInDarijaVideos'
    ]);
    youtubeDataService.getAngularInDarijaVideos.and.returnValue(
      of(YtVideoMock)
    );
    component = new HomeComponent(youtubeDataService, serverStateServiceStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pipe into service observable and resolve with homeVideos', done => {
    component?.ytVideos$?.subscribe(result => {
      expect(result.lastVideo.videoId).toEqual(YtVideoMock[1].videoId);
      expect(result.videoList.length).toEqual(2);
      done();
    });
  });
});
