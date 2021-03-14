import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {VideoBannerComponent} from './video-banner/video-banner.component';
import {VideoItemComponent} from './video-item/video-item.component';
import {VideoListingComponent} from './video-listing/video-listing.component';
import {RouterModule} from '@angular/router';
import {HomeBaseComponent} from './home-base/home-base.component';
import {SpinnerModule} from '../_shared/ui/spinner/spinner.module';
import {ErrorModule} from '../_shared/ui/error/error.module';

const DECLARATIONS = [
  HomeBaseComponent,
  VideoBannerComponent,
  VideoListingComponent,
  VideoItemComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeBaseComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]),
    YouTubePlayerModule,
    SpinnerModule,
    ErrorModule]
})
export class HomeModule {
}
