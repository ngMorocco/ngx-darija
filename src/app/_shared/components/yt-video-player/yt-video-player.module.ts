import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YtVideoPlayerComponent } from './yt-video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [YtVideoPlayerComponent],
  imports: [CommonModule, YouTubePlayerModule],
  exports: [YtVideoPlayerComponent]
})
export class YtVideoPlayerModule {}
