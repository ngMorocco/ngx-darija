import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { VideoItem } from '@core/models';
import { timeToSeconds } from '@helpers/time';
import { catchError, combineLatest, EMPTY, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  styleUrls: ['./video-session.component.scss']
})
export class VideoSessionComponent implements OnInit {
  stream$: Observable<{
    video: VideoItem | null;
    seek: { startSeconds: number; endSeconds: number; timestamp: number };
  }> = EMPTY;
  errorLoadingYoutubeVideo = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

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
        endSeconds: parseInt(paramMap.get('end') || '0', 10) || 0,
        timestamp: parseInt(paramMap.get('ts') || '0', 10) || 0
      }))
    );
    this.stream$ = combineLatest([video$, seek$]).pipe(
      map(([video, seek]) => ({ video, seek }))
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
