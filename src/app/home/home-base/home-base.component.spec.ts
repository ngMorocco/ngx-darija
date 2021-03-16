import {HomeBaseComponent} from './home-base.component';
import {YtVideoItem} from '../../_core/models';
import {Observable, of} from 'rxjs';
import {YoutubeDataService} from '../../_core/services/youtube-data.service';
import {ServerStateService} from '../../_core/services/server-state.service';

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

describe('HomeBaseComponent', () => {
  let component: HomeBaseComponent;
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
    youtubeDataService = jasmine.createSpyObj('YoutubeDataService', ['getAngularInDarijaVideos']);
    youtubeDataService.getAngularInDarijaVideos.and.returnValue(of(YtVideoMock));
    component = new HomeBaseComponent(youtubeDataService, serverStateServiceStub);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pipe into service observable and resolve with homeVideos', (done) => {
    component?.ytVideos$?.subscribe(result => {
      expect(result.lastVideo.videoId).toEqual(YtVideoMock[1].videoId);
      expect(result.videoList.length).toEqual(2);
      done();
    });
  });
});
