import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { YtVideoDetail } from '@core/models';
import { YoutubeDataService } from '@core/services/youtube-data.service';
import { SeoService } from '@ngaox/seo';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionResolver implements Resolve<YtVideoDetail | null> {
  
  constructor(
    private youtubeDataService: YoutubeDataService,
    private seoService: SeoService
  ) { }
  
  resolve(route: ActivatedRouteSnapshot): Observable<YtVideoDetail | null> {
    const videoId:string = route.paramMap.get('videoId') || "";
    return this.youtubeDataService
      .getYoutubeVideoDetail(videoId).pipe(
        tap(video => {
          if (video) {
            let description = video.description.replace(/(\r\n|\n|\r)/gm, "");
            this.seoService.set({
              title: video.title,
              description: `${description.substr(0, 160)}${
                (description.length > 160) ? '...' : ''
              }`,
              image: video.thumbnailUrl,
            });
          }
        })
      );
  }
}
