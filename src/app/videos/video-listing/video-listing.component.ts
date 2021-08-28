import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  styleUrls: ['./video-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListingComponent {
  @Input() ytVideos: VideoItem[] | null = [];
}
