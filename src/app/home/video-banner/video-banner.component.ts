import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { VideoItem } from 'src/app/_core/models';

@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBannerComponent {
  @Input() ytVideo: VideoItem | null = null;
}
