import {Component} from '@angular/core';
import {YtVideoItem} from '../../_core/models';
import {Observable} from 'rxjs';
import {YoutubeDataService} from '../../_core/services/youtube-data.service';
import {ServerStateService} from '../../_core/services/server-state.service';
import {map} from 'rxjs/operators';


interface HomeVideos {
  lastVideo: YtVideoItem;
  videoList: YtVideoItem[];
}
@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html'
})
export class HomeBaseComponent {

  ytVideos$: Observable<HomeVideos>;

  constructor(
    private youtubeDataService: YoutubeDataService,
    private serverStateService: ServerStateService
  ) {
    this.ytVideos$ = this.youtubeDataService.getAngularInDarijaVideos().pipe(
      map((res) => {
        return { lastVideo: res[res.length - 1], videoList: res };
      }),
      this.serverStateService.hydrate('videos')
    );
  }
}
