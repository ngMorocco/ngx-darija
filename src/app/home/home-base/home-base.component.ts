import {Component, OnInit} from '@angular/core';
import {YtVideoItem} from '../../_core/models';
import {Observable} from 'rxjs';
import {YoutubeDataService} from '../../_core/services/youtube-data.service';
import {ServerStateService} from '../../_core/services/server-state.service';
import {finalize, map} from 'rxjs/operators';


interface HomeVideos {
  lastVideo: YtVideoItem;
  videoList: YtVideoItem[];
}

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html'
})
export class HomeBaseComponent implements OnInit {

  ytVideos$: Observable<HomeVideos> | null = null;
  isFetchingYtVideos = false;

  constructor(
    private youtubeDataService: YoutubeDataService,
    private serverStateService: ServerStateService
  ) {
  }

  ngOnInit(): void {
    /* Displays a spinner while fetching data from service.
     Resolves to false when data is fetched */
    this.isFetchingYtVideos = true;
    this.ytVideos$ = this.youtubeDataService.getAngularInDarijaVideos().pipe(
      finalize(() => this.isFetchingYtVideos = false),
      map((res) => {
        return {lastVideo: res[res.length - 1], videoList: res};
      }),
      this.serverStateService.hydrate('videos')
    )
    ;
  }

}
