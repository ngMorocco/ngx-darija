import { Component, Input } from '@angular/core';
import { VideoStats } from '@core/models';

@Component({
  selector: 'app-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
  standalone: true
})
export class VideoStatisticsComponent {
  @Input() videoStatistics: VideoStats | null | undefined = null;
}
