import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { VideoItem } from '@core/models';
import { ServerStateService } from '@core/services/server-state.service';
import { VideoService } from '@core/services/video.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosResolver implements Resolve<Observable<VideoItem[]>> {
  constructor(
    private videoService: VideoService,
    private serverStateService: ServerStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<VideoItem[]> {
    return this.videoService
      .getPlaylist(route.paramMap.get('playlistId') || undefined)
      .pipe(
        // map(res => ({ lastVideo: res[res.length - 1], videoList: res })),
        this.serverStateService.hydrate('videos')
      );
  }
}
