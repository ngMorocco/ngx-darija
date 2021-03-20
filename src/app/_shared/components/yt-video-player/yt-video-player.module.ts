import { NgModule } from '@angular/core';
import { YtVideoPlayerComponent } from './yt-video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [YtVideoPlayerComponent],
  imports: [YouTubePlayerModule],
  exports: [YtVideoPlayerComponent]
})
export class YtVideoPlayerModule {}
