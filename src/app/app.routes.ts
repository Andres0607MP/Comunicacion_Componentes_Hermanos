import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Buscar } from './buscar/buscar';
import { Html } from './html/html';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'buscar', component: Buscar },
  { path: 'html', component: Html },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
