import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoPlayerModule } from '@shared/components';
import { ErrorModule } from '@shared/components/error/error.module';
import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session.component';
import { VideoSessionComponent } from './video-session/video-session.component';
import { VideoStatisticsComponent } from './video-statistics/video-statistics.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    SessionComponent,
    VideoSessionComponent,
    VideoStatisticsComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    VideoPlayerModule,
    ErrorModule,
    MarkdownModule.forRoot()
  ]
})
export class SessionModule {}
