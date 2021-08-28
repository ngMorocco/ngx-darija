import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '@core/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  playlist$: Observable<VideoItem[]>;

  constructor(private route: ActivatedRoute) {
    this.playlist$ = this.route.data.pipe(
      map(data => data.videos)
      // catchError(() => {
      //   // this.errorLoadingYoutubeVideo = true;
      //   return of(null);
      // })
    );
  }
}
