import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PageBlog } from './components/page-blog/page-blog';
import { PageError } from './components/page-error/page-error';
import { PageLogin } from './components/page-login/page-login';
import { PageInsertNewBlog } from './components/page-insert-new-blog/page-insert-new-blog';
import { PageCreateUser } from './components/page-create-user/page-create-user';

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
  },
  {
    path: "login",
    component: PageLogin
  },
  {
    path: "newblog",
    component: PageInsertNewBlog
  },
  {
    path: "create",
    component: PageCreateUser
  }
];
