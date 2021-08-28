import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VideoItem } from '@core/models';
import { VideoService } from '@core/services/video.service';
import { EMPTY, Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
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
    this.video$ = this.route.data.pipe(
      map(data => data.session),
      catchError(() => {
        this.errorLoadingYoutubeVideo = true;
        return of(null);
      })
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
