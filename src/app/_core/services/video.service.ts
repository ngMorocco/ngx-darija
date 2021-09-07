import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PlaylistItem, Video as YTVideo, VideoItem } from '../models';
import { BaseUrlService } from './base-url.service';

type Video = YTVideo & {
  meta: any;
};

type PlayListVideo = PlaylistItem & {
  meta: any;
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(
    private baseUrlService: BaseUrlService,
    private http: HttpClient
  ) {}

  getPlaylist(playlistId?: string): Observable<VideoItem[]> {
    const url = `${this.baseUrlService.get()}/playlist/` + (playlistId || '');
    return this.http.get<PlayListVideo[]>(url).pipe(
      map(
        items =>
          items?.map(item => ({
            ...this.buildItem(item),
            id: item?.snippet?.resourceId?.videoId as string,
            meta: item.meta
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
      .get<Video>(`${this.baseUrlService.get()}/videos/${videoId}`)
      .pipe(
        map(
          item =>
            ({
              ...this.buildItem(item),
              id: item.id,
              meta: item.meta,
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

  private buildItem(item: Video | PlayListVideo): VideoItem {
    return {
      id: '',
      title: item.snippet?.title || '',
      description: item.snippet?.description || '',
      publishedAt: item.snippet?.publishedAt || '',
      thumbnailUrl: item.snippet?.thumbnails?.maxres?.url || ''
    };
  }
}
