import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeVideos } from '@core/models';
import { ServerStateService } from '@core/services/server-state.service';
import { YoutubeDataService } from '@core/services/youtube-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YtVideosResolver implements Resolve<HomeVideos> {
  constructor(
    private youtubeDataService: YoutubeDataService,
    private serverStateService: ServerStateService
  ) {}

  resolve(): Observable<HomeVideos> {
    return this.youtubeDataService.getAngularInDarijaVideos().pipe(
      map(res => ({ lastVideo: res[res.length - 1], videoList: res })),
      this.serverStateService.hydrate('videos')
    );
  }
}
