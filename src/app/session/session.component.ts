import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YtVideoDetail } from '@core/models';
import { YoutubeDataService } from '@core/services/youtube-data.service';
import { EMPTY, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SessionComponent implements OnInit {
  videoDetail$: Observable<YtVideoDetail | null> = EMPTY;
  errorLoadingYoutubeVideo = false;

  constructor(
    private route: ActivatedRoute,
    private youtubeDataService: YoutubeDataService
  ) {}

  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('videoId');
    if (videoId) {
      this.videoDetail$ = this.youtubeDataService
        .getYoutubeVideoDetail(videoId)
        .pipe(
          tap(video => {
            if (!video) {
              this.errorLoadingYoutubeVideo = true;
            }
          })
        );
    }
  }
}
