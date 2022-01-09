import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ViewEncapsulation,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { interval, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
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
