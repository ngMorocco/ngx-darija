import { NgModule } from '@angular/core';
import { VideoPlayerComponent } from './video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [YouTubePlayerModule],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule {}
