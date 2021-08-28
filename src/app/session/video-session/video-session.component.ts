import { Component, Input, ViewEncapsulation } from '@angular/core';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  styleUrls: ['./video-session.component.scss']
})
export class VideoSessionComponent {
  @Input() video: VideoItem | null = null;
  @Input() startSeconds = 0;
  @Input() endSeconds = 0;

  onReady(event: any) {
    console.log('On Ready' + event);
  }
}
