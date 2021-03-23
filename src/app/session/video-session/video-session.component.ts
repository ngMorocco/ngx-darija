import { Component, Input, ViewEncapsulation } from '@angular/core';
import { YtVideoDetail } from '@core/models';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  encapsulation: ViewEncapsulation.None
})
export class VideoSessionComponent {
  @Input() videoDetail: YtVideoDetail | null = null;
}
