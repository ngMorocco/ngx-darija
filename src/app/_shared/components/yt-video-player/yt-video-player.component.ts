import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-yt-video-player',
  templateUrl: './yt-video-player.component.html',
  styleUrls: ['./yt-video-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YtVideoPlayerComponent {
  @Input() videoId: string | undefined = undefined;
  @Input() startSeconds = 0;

  playerVars: YT.PlayerVars = {
    rel: YT.RelatedVideos.Hide
  };
}
