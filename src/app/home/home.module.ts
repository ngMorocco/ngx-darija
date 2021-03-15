import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YtVideoPlayerModule } from '../_shared/components';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListingComponent } from './video-listing/video-listing.component';

const DECLARATIONS = [
  VideoBannerComponent,
  VideoListingComponent,
  VideoItemComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, YtVideoPlayerModule],
  exports: DECLARATIONS,
})
export class HomeModule {}
