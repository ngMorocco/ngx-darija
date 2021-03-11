import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { YtVideoItem } from './_core/models/models';
import { YoutubeDataService } from './_core/services/youtube-data.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const STATE_KEY_ITEMS = makeStateKey('videos');

interface HomeVideos {
  lastVideo: YtVideoItem;
  videoList: YtVideoItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ytVideos$: Observable<HomeVideos>;

  constructor(
    private youtubeDataService: YoutubeDataService,
    private state: TransferState
  ) {
    this.ytVideos$ = this.youtubeDataService.getAngularInDarijaVideos().pipe(
      map((res) => {
        return { lastVideo: res[res.length - 1], videoList: res };
      }),
      tap((videos) => {
        this.state.set(STATE_KEY_ITEMS, <any>videos);
      }),
      startWith(this.state.get(STATE_KEY_ITEMS, <any>[]))
    );
  }
}
