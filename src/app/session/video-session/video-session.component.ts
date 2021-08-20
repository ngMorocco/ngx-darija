import { Component, Input, ViewEncapsulation } from '@angular/core';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html'
})
export class VideoSessionComponent {
  @Input() video: VideoItem | null = null;
  @Input() startSeconds = 0;
  @Input() endSeconds = 0;
}
