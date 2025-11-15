import { Routes } from '@angular/router';
import { Guidelines } from './features/guidelines/guidelines';
import { Todo } from './features/todo/todo';

export const routes: Routes = [
  { path: 'guidelines', component: Guidelines },
  { path: 'todo', component: Todo },
];
