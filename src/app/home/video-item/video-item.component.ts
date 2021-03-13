import { Component, Input } from '@angular/core';
import { YtVideoItem } from 'src/app/_core/models/models';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html'
})
export class VideoItemComponent {

  @Input() ytVideo: YtVideoItem | null = null;

}
