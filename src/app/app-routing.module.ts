import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'videos',
    loadChildren: () =>
      import('./videos/videos.module').then(m => m.VideosModule)
  },
  {
    path: 'sessions',
    loadChildren: () =>
      import('./session/session.module').then(m => m.SessionModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
