import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { VideoItem } from 'src/app/_core/models';

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListingComponent {
  @Input() ytVideos: VideoItem[] | null = [];
}
