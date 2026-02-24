import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Vishakha | Angular & MEAN Stack Developer Portfolio',
    loadChildren: () => import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    title: 'About | Vishakha Angular Engineer',
    loadChildren: () => import('./features/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'projects',
    title: 'Case Studies | Vishakha Portfolio',
    loadChildren: () => import('./features/projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
  },
  {
    path: 'contact',
    title: 'Contact | Vishakha MEAN Stack Developer',
    loadChildren: () => import('./features/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
