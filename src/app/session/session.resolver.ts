import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { YtVideoDetail } from '@core/models';
import { YoutubeDataService } from '@core/services/youtube-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionResolver implements Resolve<YtVideoDetail | null> {
  
  constructor(
    private youtubeDataService: YoutubeDataService
  ) { }
  
  resolve(route: ActivatedRouteSnapshot): Observable<YtVideoDetail | null> {
    const videoId:string = route.paramMap.get('videoId') || "";
    return this.youtubeDataService
      .getYoutubeVideoDetail(videoId);
  }
}
