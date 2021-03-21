import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import { map, switchMap} from 'rxjs/operators';
import {YtVideoDetail} from '@core/models';
import {YoutubeDataService} from '@core/services/youtube-data.service';

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
    private youtubeDataService: YoutubeDataService
  ) {
  }

  ngOnInit(): void {
    this.videoDetail$ = this.route.paramMap.pipe(
      map(param => param.get('videoId')),
      switchMap(p => {
        return this.youtubeDataService.getYoutubeVideoDetail(p!);
      })
    );
  }

}
