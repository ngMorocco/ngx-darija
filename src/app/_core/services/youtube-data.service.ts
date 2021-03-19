import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PlaylistItemListResponse, YtVideoItem } from '../models';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {
  constructor(
    private baseUrlService: BaseUrlService,
    private http: HttpClient
  ) {}

  getAngularInDarijaVideos(): Observable<YtVideoItem[]> {
    return this.http
      .get<PlaylistItemListResponse>(
        `${this.baseUrlService.get()}/.netlify/functions/playlist`
      )
      .pipe(
        map(res =>
          res.items!.map(
            playlisteItem =>
              ({
                videoId: playlisteItem.snippet!.resourceId!.videoId,
                title: playlisteItem.snippet!.title,
                description: playlisteItem.snippet!.description,
                publishedAt: playlisteItem.snippet!.publishedAt,
                thumbnailUrl: playlisteItem.snippet!.thumbnails!.maxres!.url
              } as YtVideoItem)
          )
        ),
        catchError(e => {
          console.log(e); // Put here to see when there is an issue during prerender
          return of([]);
        })
      );
  }
}
