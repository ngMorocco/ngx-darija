import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoPlayerModule } from '@shared/components';
import { ErrorModule } from '@shared/components/error/error.module';
import { MarkdownModule } from 'ngx-markdown';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    HomeComponent,
    VideoBannerComponent,
    VideoItemComponent,
    VideoListingComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ErrorModule,
    VideoPlayerModule,
    MarkdownModule.forChild()
  ]
})
export class HomeModule {}
