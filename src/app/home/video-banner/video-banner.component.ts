import {Component, Input} from '@angular/core';
import {YtVideoItem} from 'src/app/_core/models/models';

@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html'
})
export class VideoBannerComponent {
  @Input() ytVideo: YtVideoItem | null = null;
}
