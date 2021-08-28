import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionIntroComponent } from './intro/intro.component';
import { SessionComponent } from './session.component';
import { SessionResolver } from './session.resolver';
import { VideoSessionComponent } from './video-session/video-session.component';
import { VideosResolver } from './video-session/videos.resolver';

const routes: Routes = [
  {
    path: '',
    component: SessionComponent,
    children: [
      {
        path: '',
        component: SessionIntroComponent
      },
      {
        path: ':videoId',
        component: VideoSessionComponent,
        resolve: {
          session: SessionResolver
        }
      }
    ],
    resolve: {
      videos: VideosResolver
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {}
