import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PlaylistItemListResponse, VideoListResponse, YtVideoDetail, YtVideoItem } from '../models';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root',
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
        map((res) =>
          res.items!.map(
            (playlisteItem) =>
              ({
                videoId: playlisteItem.snippet!.resourceId!.videoId,
                title: playlisteItem.snippet!.title,
                description: playlisteItem.snippet!.description,
                publishedAt: playlisteItem.snippet!.publishedAt,
                thumbnailUrl: playlisteItem.snippet!.thumbnails!.maxres!.url,
              } as YtVideoItem)
          )
        ),
        catchError((e) => {
          console.log(e); // Put here to see when there is an issue during prerender
          return of([]);
        })
      );
  }

  getYoutubeVideoDetail(videoId: string): Observable<YtVideoDetail | null> {
    return this.http
      .get<VideoListResponse>(
        `${this.baseUrlService.get()}/.netlify/functions/videos/${videoId}`
      )
      .pipe(
        map((res) => {
          if (!res.items || res.items.length === 0) {
            return null;
          }
          return {
            videoId: res.items![0].id,
            title: res.items![0].snippet!.title,
            description: res.items![0].snippet!.description,
            publishedAt: res.items![0].snippet!.publishedAt,
            thumbnailUrl: res.items![0].snippet!.thumbnails!.maxres!.url,
            statistics: {
              viewCount: res.items![0].statistics!.viewCount,
              commentCount: res.items![0].statistics!.commentCount,
              likeCount: res.items![0].statistics!.likeCount,
              dislikeCount: res.items![0].statistics!.dislikeCount,
            }
          } as YtVideoDetail;
        }
        ),
        catchError((e) => {
          console.log(e); // Put here to see when there is an issue during prerender
          return of(null);
        })
      );
  }
}
