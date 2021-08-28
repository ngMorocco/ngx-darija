import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnChanges {
  @Input() videoId: string | undefined = undefined;
  @Input() startSeconds = 0;
  @Input() endSeconds = 0;
  // @ts-ignore
  @ViewChild(YouTubePlayer) player: YouTubePlayer;
  playerVars: YT.PlayerVars = {
    autoplay: 0,
    rel: 0
  };

  ngOnChanges(changes: SimpleChanges) {
    const { startSeconds } = changes;
    if (startSeconds && this.player) {
      // FIX: doesn't work when component is already loaded
      this.player.seekTo(this.startSeconds, true);
      this.player.playVideo();
    }
  }
}
