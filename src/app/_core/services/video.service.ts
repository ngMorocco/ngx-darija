import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  PlaylistItem,
  PlaylistItemListResponse,
  Video,
  VideoItem
} from '../models';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(
    private baseUrlService: BaseUrlService,
    private http: HttpClient
  ) {}

  buildItem(item: Video | PlaylistItem): VideoItem {
    return {
      id: '',
      title: item.snippet?.title || '',
      description: item.snippet?.description || '',
      publishedAt: item.snippet?.publishedAt || '',
      thumbnailUrl: item.snippet?.thumbnails?.maxres?.url || ''
    };
  }

  getPlaylist(): Observable<VideoItem[]> {
    return this.http
      .get<PlaylistItemListResponse>(
        `${this.baseUrlService.get()}/.netlify/functions/playlist`
      )
      .pipe(
        map(
          ({ items }) =>
            items?.map(item => ({
              ...this.buildItem(item),
              id: item?.snippet?.resourceId?.videoId as string
            })) || []
        ),
        catchError(e => {
          console.log(e); // Put here to see when there is an issue during prerender
          return of([]);
        })
      );
  }

  getVideo(videoId: string): Observable<VideoItem | null> {
    return this.http
      .get<Video>(
        `${this.baseUrlService.get()}/.netlify/functions/videos/${videoId}`
      )
      .pipe(
        map(
          item =>
            ({
              ...this.buildItem(item),
              id: item.id,
              statistics: {
                viewCount: item?.statistics?.viewCount,
                commentCount: item?.statistics?.commentCount,
                likeCount: item?.statistics?.likeCount,
                dislikeCount: item?.statistics?.dislikeCount
              }
            } as VideoItem)
        ),
        catchError(e => {
          console.log(e); // Put here to see when there is an issue during prerender
          return of(null);
        })
      );
  }
}
