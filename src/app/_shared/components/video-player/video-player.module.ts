import { NgModule } from '@angular/core';
import { VideoPlayerComponent } from './video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RerenderModule } from '@shared/directives/rerender/rerender.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [YouTubePlayerModule, RerenderModule, CommonModule],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule {}
