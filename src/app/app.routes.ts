import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'taquilla',
    loadComponent: () => import('./pages/taquilla/taquilla.component').then(m => m.TaquillaComponent),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
