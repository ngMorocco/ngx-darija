import { Component, Input, ViewEncapsulation } from '@angular/core';
import { YtVideoDetail } from 'src/app/_core/models';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  styleUrls: ['./video-session.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoSessionComponent {

  @Input() videoDetail: YtVideoDetail | null = null;

}
