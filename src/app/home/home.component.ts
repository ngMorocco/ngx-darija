import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoItem } from '@core/models';
import { ServerStateService } from '@core/services/server-state.service';
import { VideoService } from '@core/services/video.service';

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
    private videoService: VideoService,
    private serverStateService: ServerStateService
  ) {
    this.ytVideos$ = this.videoService.getPlaylist().pipe(
      map(res => ({ lastVideo: res[res.length - 1], videoList: res })),
      this.serverStateService.hydrate('videos')
    );
  }
}
