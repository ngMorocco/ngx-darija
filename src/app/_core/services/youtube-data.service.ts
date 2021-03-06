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

  private rootApi = 'https://www.googleapis.com/youtube/v3/';
  private apiKey = environment.googleApiKey;

  constructor(private http: HttpClient) { }

  getAngularInDarijaVideos(): Observable<YtVideoItem[]> {
    return this.http.get<any>(`${this.rootApi}playlistItems?part=snippet&maxResults=50&playlistId=PLTCFcpZfnDoJxDofsnsNvvV_5djpEl4Bs&key=${this.apiKey}`)
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
