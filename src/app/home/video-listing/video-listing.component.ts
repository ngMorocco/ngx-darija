import { Component, Input } from '@angular/core';
import { YtVideoItem } from 'src/app/_core/models/models';

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html'
})
export class VideoListingComponent {

  @Input() ytVideos: YtVideoItem[] | null = [];

}
