import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VideoItem } from '@core/models';
import {
  catchError,
  combineLatest,
  EMPTY,
  map,
  Observable,
  of,
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  styleUrls: ['./video-session.component.scss']
})
export class VideoSessionComponent implements OnInit, OnDestroy {
  stream$: Observable<{
    video: VideoItem | null;
    seek: { startSeconds: number; endSeconds: number };
  }> = EMPTY;
  errorLoadingYoutubeVideo = false;
  subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const video$ = this.route.data.pipe(
      map(data => data.session),
      catchError(() => {
        this.errorLoadingYoutubeVideo = true;
        return of(null);
      })
    );
    const seek$ = this.route.queryParamMap.pipe(
      map((paramMap: ParamMap) => ({
        startSeconds: parseInt(paramMap.get('start') || '0', 10) || 0,
        endSeconds: parseInt(paramMap.get('end') || '0', 10) || 0
      }))
    );
    this.stream$ = combineLatest([video$, seek$]).pipe(
      map(([video, seek]) => ({ video, seek }))
    );

    this.subscription.add();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
