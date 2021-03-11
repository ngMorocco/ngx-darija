import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { YtVideoItem } from './_core/models/models';
import { ServerStateService } from './_core/services/server-state.service';
import { YoutubeDataService } from './_core/services/youtube-data.service';

interface HomeVideos {
  lastVideo: YtVideoItem;
  videoList: YtVideoItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
