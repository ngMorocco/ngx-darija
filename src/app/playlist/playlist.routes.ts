import { Routes } from '@angular/router';
import { ContributeComponent } from './contribute/contribute.component';
import { PlaylistComponent } from './playlist.component';
import { PlaylistResolver } from './playlist.resolver';
import { VideoSessionComponent } from './video-session/video-session.component';
import { VideoResolver } from './video-session/video.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PlaylistComponent,
    resolve: {
      videos: PlaylistResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'contribute',
        pathMatch: 'full'
      },
      {
        path: 'contribute',
        component: ContributeComponent
      },
      {
        path: ':videoId',
        component: VideoSessionComponent,
        resolve: {
          session: VideoResolver
        }
      }
    ]
  }
];
