import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PageBlog } from './components/page-blog/page-blog';
import { PageError } from './components/page-error/page-error';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "home",
    component: Home
  },
  {
    path: "blog",
    component: PageBlog
  },
  {
    path: "error",
    component: PageError
  }
];
