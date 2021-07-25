import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VideoItem } from '@core/models';
import { VideoService } from '@core/services/video.service';
import { EMPTY, Observable, Subscription } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SessionComponent implements OnInit, OnDestroy {
  video$: Observable<VideoItem | null> = EMPTY;
  startSeconds = 0;
  endSeconds = 0;
  errorLoadingYoutubeVideo = false;
  subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.video$ = this.route.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('videoId') || ''),
      filter((videoId: string) => !!videoId),
      distinctUntilChanged(),
      switchMap((videoId: string) =>
        this.videoService.getVideo(videoId).pipe(
          tap(video => {
            if (!video) {
              this.errorLoadingYoutubeVideo = true;
            }
          })
        )
      )
    );

    this.subscription.add(
      this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
        this.startSeconds = parseInt(paramMap.get('start') || '0', 10) || 0;
        this.endSeconds = parseInt(paramMap.get('end') || '0', 10) || 0;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
