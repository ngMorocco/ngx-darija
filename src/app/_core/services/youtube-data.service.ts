import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { YtVideoItem } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  private rootApi = '/.netlify/functions/playlist';
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
      }))
    );
  }
}
