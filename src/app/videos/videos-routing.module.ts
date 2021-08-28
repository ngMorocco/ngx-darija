import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos.component';
import { VideosResolver } from './videos.resolver';

const routes: Routes = [
  {
    path: ':playlistId',
    component: VideosComponent
  },
  {
    path: '',
    component: VideosComponent,
    resolve: {
      videos: VideosResolver
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule {}
