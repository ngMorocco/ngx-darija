import { Component, Input, ViewEncapsulation } from '@angular/core';
import { YtVideoStatistics } from '@core/models';

@Component({
  selector: 'app-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoStatisticsComponent {
  @Input() videoStatistics: YtVideoStatistics | null = null;
}
