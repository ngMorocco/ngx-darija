import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { VideoItem } from '@core/models';
import { ServerStateService } from '@core/services/server-state.service';
import { VideoService } from '@core/services/video.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistResolver  {
  constructor(
    private videoService: VideoService,
    private serverStateService: ServerStateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<VideoItem[]> {
    return this.serverStateService.hydrate<VideoItem[]>(
      'videos',
      this.videoService.getPlaylist(route.queryParamMap.get('id') || undefined),
      []
    );
  }
}
