import { NgModule } from '@angular/core';
import { VideoPlayerComponent } from './video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RerenderModule } from '@shared/directives/rerender/rerender.module';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [YouTubePlayerModule, RerenderModule],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule {}
