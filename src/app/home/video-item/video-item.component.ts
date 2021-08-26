import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemComponent {
  @Input() video: VideoItem | null = null;
}
