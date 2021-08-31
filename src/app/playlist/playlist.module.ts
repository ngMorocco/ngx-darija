import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoPlayerModule } from '@shared/components';
import { ErrorModule } from '@shared/components/error/error.module';
import { IsBrowserModule } from '@shared/directives/is-browser/is-browser.module';
import { MarkdownModule } from 'ngx-markdown';
import { ContributeComponent } from './contribute/contribute.component';
import { SessionRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { VideoSessionComponent } from './video-session/video-session.component';
import { VideoStatisticsComponent } from './video-statistics/video-statistics.component';

@NgModule({
  declarations: [
    PlaylistComponent,
    ContributeComponent,
    VideoSessionComponent,
    VideoStatisticsComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    VideoPlayerModule,
    IsBrowserModule,
    ErrorModule,
    MarkdownModule.forChild()
  ]
})
export class SessionModule {}
