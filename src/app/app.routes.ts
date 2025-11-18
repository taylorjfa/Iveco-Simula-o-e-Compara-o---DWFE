import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'daily',
    loadComponent: () => import('./pages/daily/daily.component').then((m) => m.DailyComponent),
  },
  {
    path: 's-way',
    loadComponent: () => import('./pages/sway/sway.component').then((m) => m.SwayComponent),
  },
  {
    path: 'tector',
    loadComponent: () => import('./pages/tector/tector.component').then((m) => m.TectorComponent),
  },
  {
    path: 'precificador',
    loadComponent: () =>
      import('./pages/precificador/precificador.component').then((m) => m.PrecificadorComponent),
  },
  {
    path: 'minhagaragem',
    loadComponent: () =>
      import('./pages/minha-garagem/minha-garagem.component').then((m) => m.MinhaGaragemComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard.component').then(
        (m) => m.AdminDashboardComponent
      ),
  },
  {
    path: 'comparador',
    loadComponent: () =>
      import('./pages/comparador/comparador.component').then((m) => m.ComparadorComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
