import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./playlist/playlist.module').then(m => m.PlaylistModule)
    /*loadComponent: () =>
      import('./playlist/playlist.component').then(m => m.PlaylistComponent)*/
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
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
