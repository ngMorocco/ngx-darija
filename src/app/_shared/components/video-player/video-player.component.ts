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
  styleUrls: ['./video-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoPlayerComponent implements OnChanges {
  @Input() videoId: string | undefined = undefined;
  @Input() startSeconds = 0;
  @Input() endSeconds = 0;

  // @ts-ignore
  @ViewChild(YouTubePlayer) player: YouTubePlayer;

  ngOnChanges(changes: SimpleChanges) {
    const { startSeconds } = changes;
    if (
      startSeconds &&
      !startSeconds.firstChange &&
      startSeconds.currentValue !== startSeconds.previousValue
    ) {
      this.player.seekTo(this.startSeconds, true);
      this.player.playVideo();
    }
  }
}
