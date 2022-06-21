import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'playlist',
    loadChildren: () => import('./playlist/playlist.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
