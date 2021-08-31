import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { VideoItem } from '@core/models';
import { VideoService } from '@core/services/video.service';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoResolver implements Resolve<Observable<VideoItem | null>> {
  constructor(private videoService: VideoService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<VideoItem | null> {
    const videoId = route.paramMap.get('videoId');
    return videoId
      ? this.videoService.getVideo(videoId)
      : throwError(() => new Error('No video id provided'));
  }
}
