import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '@core/models';
import { VideoService } from '@core/services/video.service';
import { EMPTY, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SessionComponent implements OnInit {
  video$: Observable<VideoItem | null> = EMPTY;
  time = 0;
  errorLoadingYoutubeVideo = false;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('videoId');
    this.time =
      parseInt(this.route.snapshot.paramMap.get('time') || '0', 10) || 0;
    if (videoId) {
      this.video$ = this.videoService.getVideo(videoId).pipe(
        tap(video => {
          if (!video) {
            this.errorLoadingYoutubeVideo = true;
          }
        })
      );
    }
  }
}
