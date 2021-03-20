import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { YtVideoItem } from '@core/models';

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListingComponent {
  @Input() ytVideos: YtVideoItem[] | null = [];
}
