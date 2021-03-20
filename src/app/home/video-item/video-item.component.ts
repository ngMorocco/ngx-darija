import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { YtVideoItem } from '@core/models';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtVideoItemComponent {
  @Input() ytVideo: YtVideoItem | null = null;
}
