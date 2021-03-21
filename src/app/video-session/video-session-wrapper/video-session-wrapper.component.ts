import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {YtVideoDetail} from '@core/models';
import {YoutubeDataService} from '@core/services/youtube-data.service';
import {makeStateKey, TransferState} from '@angular/platform-browser';

@Component({
  selector: 'app-video-session-wrapper',
  templateUrl: './video-session-wrapper.component.html',
  styleUrls: ['./video-session-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoSessionWrapperComponent implements OnInit {
  videoDetail$: Observable<YtVideoDetail | null> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private youtubeDataService: YoutubeDataService,
    private state: TransferState
  ) {
  }

  ngOnInit(): void {
    this.videoDetail$ = this.route.paramMap.pipe(
      filter(param => {
        return !!param.get('videoId');
      }),
      map(param => param.get('videoId')),
      switchMap(p => {
        const STATE_KEY_ITEMS = makeStateKey(`sessions/${p}`);
        const videoDetail = this.state.get(STATE_KEY_ITEMS, null);
        if (videoDetail) {
          return of(videoDetail);
        } else {
          return this.youtubeDataService.getYoutubeVideoDetail(p!).pipe(
            tap(video => {
              this.state.set(STATE_KEY_ITEMS, video as any);
            }));
        }
      })
    );
  }

}
