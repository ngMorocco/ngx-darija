import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { YtVideoItemComponent } from './video-item/video-item.component';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { RouterModule } from '@angular/router';
import { ErrorModule } from '@shared/components/error/error.module';
import { YtVideoPlayerModule } from '@shared/components';
import { HomeComponent } from './home.component';
import { YtVideosResolver } from './yt-videos.resolver';

const DECLARATIONS = [
  HomeComponent,
  VideoBannerComponent,
  VideoListingComponent,
  YtVideoItemComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          ytVideos: YtVideosResolver
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]),
    ErrorModule,
    YtVideoPlayerModule
  ]
})
export class HomeModule {}
