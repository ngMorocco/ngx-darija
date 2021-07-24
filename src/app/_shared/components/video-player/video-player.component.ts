import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoPlayerComponent {
  @Input() videoId: string | undefined = undefined;
  @Input() startSeconds = 0;
  @Input() endSeconds = 0;
}
