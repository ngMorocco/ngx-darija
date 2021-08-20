import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemComponent {
  @Input() video: VideoItem | null = null;
}
