import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-yt-video-player',
  templateUrl: './yt-video-player.component.html',
  styleUrls: ['./yt-video-player.component.scss'],
  host: {
    'class': 'app-yt-video-player'
  },
  encapsulation: ViewEncapsulation.None
})
export class YtVideoPlayerComponent {

  @Input() videoId: string | undefined = undefined;

  playerVars: YT.PlayerVars = {
    rel: YT.RelatedVideos.Hide
  };
}
