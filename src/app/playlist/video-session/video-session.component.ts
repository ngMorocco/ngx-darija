import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Chapter, VideoItem } from '@core/models';
import { SeoService } from '@core/services/seo.service';
import { timeToSeconds } from '@helpers/time';
import { VideoPlayerLiteComponent } from '@shared/components/video-player-lite/video-player-lite.component';
import { VideoPlayerComponent } from '@shared/components/video-player/video-player.component';
import { IsBrowserDirective } from '@shared/directives/is-browser/is-browser.directive';
import { MarkdownModule } from 'ngx-markdown';
import {
  catchError,
  combineLatest,
  EMPTY,
  map,
  Observable,
  of,
  tap
} from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  styleUrls: ['./video-session.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IsBrowserDirective,
    VideoPlayerComponent,
    VideoPlayerLiteComponent,
    MarkdownModule
  ]
})
export class VideoSessionComponent implements OnInit {
  stream$: Observable<{
    video: VideoItem | null;
    seek: { startSeconds: number; endSeconds: number; timestamp: number };
  }> = EMPTY;
  errorLoadingYoutubeVideo = false;
  branch = environment.application.branch || 'main';
  currentTime = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    const video$ = this.route.data.pipe(
      map(data => data.session),
      tap((video: VideoItem) => {
        this.seo.setText(video.meta?.title || video.title);
      }),
      catchError(() => {
        this.errorLoadingYoutubeVideo = true;
        return of(null);
      })
    );
    const seek$ = this.route.queryParamMap.pipe(
      map((paramMap: ParamMap) => ({
        startSeconds: parseInt(paramMap.get('start') || '0', 10) || 0,
        endSeconds: parseInt(paramMap.get('end') || '0', 10) || 0,
        timestamp: parseInt(paramMap.get('ts') || '0', 10) || 0
      }))
    );
    this.stream$ = combineLatest([video$, seek$]).pipe(
      map(([video, seek]) => {
        if (video?.meta?.chapters) {
          const chapters: Chapter[] = video.meta.chapters.map(chapter => ({
            ...chapter,
            startInSeconds: timeToSeconds(chapter.start),
            endInSeconds: timeToSeconds(chapter.end)
          }));
          return {
            video: {
              ...video,
              meta: {
                ...video.meta,
                chapters
              }
            },
            seek
          };
        }
        return {
          video,
          seek
        };
      })
    );
  }

  onSeek({ start, end }: { start: string; end: string }) {
    this.router.navigate(['./'], {
      queryParams: {
        start: timeToSeconds(start),
        end: timeToSeconds(end),
        ts: new Date().getTime()
      },
      relativeTo: this.route
    });
  }
}
