import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSessionComponent } from './video-session/video-session.component';
import { RouterModule } from '@angular/router';
import { YtVideoPlayerModule } from '../_shared/components';
import { VideoSessionWrapperComponent } from './video-session-wrapper/video-session-wrapper.component';
import { VideoStatisticsComponent } from './video-statistics/video-statistics.component';



@NgModule({
  declarations: [VideoSessionComponent, VideoSessionWrapperComponent, VideoStatisticsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'session/:videoId',
        component: VideoSessionWrapperComponent,
      }
    ]),
    YtVideoPlayerModule
  ]
})
export class VideoSessionModule { }
