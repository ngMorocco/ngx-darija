import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoItem } from '../_core/models';
import { ServerStateService } from '../_core/services/server-state.service';
import { YoutubeDataService } from '../_core/services/youtube-data.service';

interface HomeVideos {
  lastVideo: VideoItem;
  videoList: VideoItem[];
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
