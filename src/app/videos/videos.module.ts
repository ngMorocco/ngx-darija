import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoPlayerModule } from '@shared/components';
import { ErrorModule } from '@shared/components/error/error.module';
import { MarkdownModule } from 'ngx-markdown';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [
    VideosComponent,
    VideoBannerComponent,
    VideoItemComponent,
    VideoListingComponent
  ],
  imports: [
    CommonModule,
    ErrorModule,
    VideoPlayerModule,
    MarkdownModule.forChild(),
    VideosRoutingModule
  ]
})
export class VideosModule {}
