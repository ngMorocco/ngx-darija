import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoPlayerModule } from '@shared/components';
import { ErrorModule } from '@shared/components/error/error.module';
import { IsBrowserModule } from '@shared/directives/is-browser/is-browser.module';
import { MarkdownModule } from 'ngx-markdown';
import { SessionIntroComponent } from './intro/intro.component';
import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session.component';
import { VideoSessionComponent } from './video-session/video-session.component';
import { VideoStatisticsComponent } from './video-statistics/video-statistics.component';

@NgModule({
  declarations: [
    SessionComponent,
    VideoSessionComponent,
    VideoStatisticsComponent,
    SessionIntroComponent
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
