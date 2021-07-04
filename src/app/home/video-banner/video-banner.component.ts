import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBannerComponent {
  @Input() video: VideoItem | null = null;
}
