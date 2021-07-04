import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { ErrorModule } from '@shared/components/error/error.module';
import { VideoPlayerModule } from '@shared/components';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    VideoBannerComponent,
    VideoItemComponent,
    VideoListingComponent
  ],
  imports: [CommonModule, HomeRoutingModule, ErrorModule, VideoPlayerModule]
})
export class HomeModule {}
