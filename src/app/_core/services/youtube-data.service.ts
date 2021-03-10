import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { YtVideoItem } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  private rootApi = `${environment.baseUrl}.netlify/functions/playlist`;
  constructor(private http: HttpClient) { }

  getAngularInDarijaVideos(): Observable<YtVideoItem[]> {
    return this.http.get<any>(`${this.rootApi}`)
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
      catchError(() => of([]))
    );
  }
}
