import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSessionComponent } from './video-session/video-session.component';
import { RouterModule } from '@angular/router';
import { YtVideoPlayerModule } from '@shared/components';
import { SessionComponent } from './session.component';
import { VideoStatisticsComponent } from './video-statistics/video-statistics.component';
import { ErrorModule } from '@shared/components/error/error.module';

@NgModule({
  declarations: [
    SessionComponent,
    VideoSessionComponent,
    VideoStatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':videoId',
        component: SessionComponent
      }
    ]),
    YtVideoPlayerModule,
    ErrorModule
  ]
})
export class SessionModule {}
