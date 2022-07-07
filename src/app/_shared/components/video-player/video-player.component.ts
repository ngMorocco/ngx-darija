import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { RerenderDirective } from '@shared/directives/rerender/rerender.directive';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-video-player',
  template: `<div class="app-video-player">
    <youtube-player
      *appRerender="videoId"
      [videoId]="videoId"
      [playerVars]="playerVars"
      [startSeconds]="startSeconds"
      [endSeconds]="endSeconds"
    ></youtube-player>
  </div> `,
  styles: [
    `
      // tricks for making embed iframe video responsive
      .app-video-player {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        &::before {
          box-sizing: border-box;
          display: block;
          content: '';
        }
        iframe {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      }
    `
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [YouTubePlayerModule, RerenderDirective]
})
export class VideoPlayerComponent implements OnChanges, OnDestroy {
  @Input() videoId: string | undefined = undefined;
  @Input() timestamp = 0;
  @Input() startSeconds = 0;
  @Input() endSeconds = 0;
  @Output() currentTime = new EventEmitter<number>();
  // @ts-ignore
  @ViewChild(YouTubePlayer) player: YouTubePlayer;
  playerVars: YT.PlayerVars = {
    autoplay: 1,
    rel: 0
  };

  private subscription: Subscription;

  constructor() {
    this.subscription = interval(1000)
      .pipe(map(() => Math.floor(this.player?.getCurrentTime())))
      .subscribe(time => this.currentTime.emit(time));
  }

  ngOnChanges() {
    if (this.player) {
      this.player.seekTo(this.startSeconds, true);
      this.player.playVideo();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
