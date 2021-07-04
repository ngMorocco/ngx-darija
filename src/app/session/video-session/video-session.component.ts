import { Component, Input, ViewEncapsulation } from '@angular/core';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  encapsulation: ViewEncapsulation.None
})
export class VideoSessionComponent {
  @Input() video: VideoItem | null = null;
  @Input() time = 0;
}
