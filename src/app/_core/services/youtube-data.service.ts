import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { YtVideoItem, PlaylistItemListResponse } from '../models';

const YT_ROOT_API = 'https://www.googleapis.com/youtube/v3/';
const ANGULAR_IN_DARIJA_PLAYLIST_ID = 'PLTCFcpZfnDoJxDofsnsNvvV_5djpEl4Bs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  private apiKey = environment.googleApiKey;

  constructor(private http: HttpClient) { }

  getAngularInDarijaVideos(): Observable<YtVideoItem[]> {
    return this.http.get<PlaylistItemListResponse>(`${YT_ROOT_API}playlistItems?part=snippet&maxResults=50&playlistId=${ANGULAR_IN_DARIJA_PLAYLIST_ID}&key=${this.apiKey}`)
    .pipe(
      map(res => res.items!.map(x => {
        return {
          videoId: x.snippet!.resourceId!.videoId,
          title: x.snippet!.title,
          description: x.snippet!.description,
          publishedAt: x.snippet!.publishedAt,
          thumbnailUrl: x.snippet!.thumbnails!.standard!.url
        } as YtVideoItem;
      }))
    );
  }
}
