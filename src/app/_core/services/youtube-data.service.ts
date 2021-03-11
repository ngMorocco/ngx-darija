import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { YtVideoItem } from '../models/models';
import { BaseUrlService } from '../services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  constructor(private baseUrlService: BaseUrlService, private http: HttpClient) { }

  getAngularInDarijaVideos(): Observable<YtVideoItem[]> {
    return this.http.get<any>(`${this.baseUrlService.get()}/.netlify/functions/playlist`)
    .pipe(
      map(res => (res.items as Array<any>).map(x => {
        return {
          videoId: x.snippet.resourceId.videoId,
          title: x.snippet.title,
          description: x.snippet.description,
          publishedAt: x.snippet.publishedAt,
          thumbnailUrl: x.snippet.thumbnails.standard.url
        } as YtVideoItem;
      })),
      catchError((e) => {
        console.log(e); // Put here to see when there is an issue during prerender
        return of([])
      })
    );
  }
}
