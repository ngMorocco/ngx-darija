import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YtVideoItem } from '@core/models';
import { ServerStateService } from '@core/services/server-state.service';
import { YoutubeDataService } from '@core/services/youtube-data.service';

interface HomeVideos {
  lastVideo: YtVideoItem;
  videoList: YtVideoItem[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  ytVideos$: Observable<HomeVideos>;

  constructor(
    private youtubeDataService: YoutubeDataService,
    private serverStateService: ServerStateService
  ) {
    this.ytVideos$ = this.youtubeDataService.getAngularInDarijaVideos().pipe(
      map(res => {
        return { lastVideo: res[res.length - 1], videoList: res };
      }),
      this.serverStateService.hydrate('videos')
    );
  }
}
