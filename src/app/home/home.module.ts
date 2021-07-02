import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { YtVideoItemComponent } from './video-item/video-item.component';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { RouterModule } from '@angular/router';
import { ErrorModule } from '@shared/components/error/error.module';
import { YtVideoPlayerModule } from '@shared/components';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    VideoBannerComponent,
    YtVideoItemComponent,
    VideoListingComponent
  ],
  imports: [CommonModule, HomeRoutingModule, ErrorModule, YtVideoPlayerModule]
})
export class HomeModule {}
