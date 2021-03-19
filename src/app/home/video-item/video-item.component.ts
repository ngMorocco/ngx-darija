import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { VideoItem } from 'src/app/_core/models';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemComponent {
  @Input() ytVideo: VideoItem | null = null;
}
