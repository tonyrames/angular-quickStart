import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './template/layout/layout.component';
import { NavigationComponent } from './template/navigation/navigation.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    data: { pageTitle: 'Home' },
    children: [
      {
        path: 'home', component: HomeComponent
      }]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
