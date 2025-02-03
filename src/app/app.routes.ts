import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // the empty path is the default route
    path: '',
    pathMatch: 'full', // it is required when the path is empty
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import('./todos/todos.component').then((m) => m.TodosComponent);
    },
  },
];
