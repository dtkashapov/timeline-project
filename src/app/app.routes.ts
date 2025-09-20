import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    {
        path: 'timeline',
        loadComponent: () => import('./pages/timeline').then(m => m.TimelineComponent),
    },
    { path: '**', redirectTo: '' },
];
